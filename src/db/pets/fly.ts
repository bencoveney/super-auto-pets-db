import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";
import { zombieFly } from "./zombieFly";

function flyAbility(level: number): Ability {
  return {
    description: `Friend faints: Summon a ${level * 4}/${level * 4} fly in its place (Max 3 times)`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "SummonPet",
      pet: zombieFly.id,
      withAttack: level * 4,
      withHealth: level * 4,
      team: "Friendly",
    },
    maxTriggers: 3,
  };
}

export const fly: Pet = {
  ...getPetIdentifiers("Fly"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1FAB0}",
  },
  tier: 6,
  baseAttack: 5,
  baseHealth: 5,
  packs: ["StandardPack"],
  level1Ability: flyAbility(1),
  level2Ability: flyAbility(2),
  level3Ability: flyAbility(3),
};

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";
import { zombieFly } from "./zombieFly";

function flyAbility(level: number): Ability {
  return {
    description: `Friend faints: Summon a ${level * 2}/${
      level * 2
    } fly in its place`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "SummonPet",
      pet: zombieFly.id,
      withAttack: level * 2,
      withHealth: level * 2,
      team: "Friendly",
    },
  };
}

export const fly: Pet = {
  ...getPetIdentifiers("Fly"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1FAB0}",
  },
  tier: 6,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: flyAbility(1),
  level2Ability: flyAbility(2),
  level3Ability: flyAbility(3),
};

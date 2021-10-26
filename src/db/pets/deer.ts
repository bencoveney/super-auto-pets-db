import { Ability, Pet, Trigger } from "..";
import { getPetIdentifiers } from "../database";
import { bus } from "./bus";

function deerAbility(level: number): Ability {
  return {
    description: `Faint: Summon a ${level * 5}/${
      level * 5
    } Bus with Splash Attack`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: bus.id,
      withAttack: level * 5,
      withHealth: level * 5,
      team: "Friendly",
    },
  };
}

export const deer: Pet = {
  ...getPetIdentifiers("Deer"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F98C}",
  },
  tier: 4,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: deerAbility(1),
  level2Ability: deerAbility(2),
  level3Ability: deerAbility(3),
};

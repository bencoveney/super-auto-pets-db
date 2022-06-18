import { Pet, Ability, Trigger } from "..";
import { getPetIdentifiers } from "../database";
import { dirtyRat } from "./dirtyRat";



function ratAbility(level: number): Ability {
  return {
    description: `Faint: summon one 1/1 Dirty Rat for the opponent that betrays him.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: dirtyRat.id,
      team: "Enemy",
    },
  };
}

export const rat: Pet = {
  ...getPetIdentifiers("Rat"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F400}",
  },
  tier: 2,
  baseAttack: 4,
  baseHealth: 5,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: ratAbility(1),
  level2Ability: ratAbility(2),
  level3Ability: ratAbility(3),
};

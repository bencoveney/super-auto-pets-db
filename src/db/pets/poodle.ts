import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function poodleAbility(level: number): Ability {
  return {
    // TODO: The Poodle buffs the leftmost animal of each tier
    description: `End turn: Give +${level}/+${level} to different tier animals.`,
    trigger: Trigger.EndOfTurn,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "DifferentTierAnimals",
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const poodle: Pet = {
  ...getPetIdentifiers("Poodle"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F429}",
  },
  tier: 4,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["ExpansionPack1"],
  level1Ability: poodleAbility(1),
  level2Ability: poodleAbility(2),
  level3Ability: poodleAbility(3),
};

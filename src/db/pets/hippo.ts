import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function hippoAbility(level: number): Ability {
  return {
    description: `Knock out: Gain +${level * 2}/+${level * 2}.`,
    trigger: Trigger.KnockOut,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "Self",
      },
      attackAmount: level * 2,
      healthAmount: level * 2,
      untilEndOfBattle: false,
    },
  };
}

export const hippo: Pet = {
  ...getPetIdentifiers("Hippo"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F99B}",
  },
  tier: 4,
  baseAttack: 4,
  baseHealth: 7,
  packs: ["StandardPack"],
  level1Ability: hippoAbility(1),
  level2Ability: hippoAbility(2),
  level3Ability: hippoAbility(3),
};

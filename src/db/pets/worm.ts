import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function wormAbility(level: number): Ability {
  return {
    description: `Eats shop food: Gain +${level}/+${level}`,
    trigger: Trigger.EatsShopFood,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      attackAmount: level,
      healthAmount: level,
      target: {
        kind: "Self",
      },
      untilEndOfBattle: false,
    },
  };
}

export const worm: Pet = {
  ...getPetIdentifiers("Worm"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1FAB1}",
  },
  tier: 4,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: wormAbility(1),
  level2Ability: wormAbility(2),
  level3Ability: wormAbility(3),
};

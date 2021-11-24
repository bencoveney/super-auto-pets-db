import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function sealAbility(level: number): Ability {
  return {
    description: `Eats shop food: Give 2 random friends +${level}/+${level}.`,
    trigger: Trigger.EatsShopFood,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "RandomFriend",
        n: 2,
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const seal: Pet = {
  ...getPetIdentifiers("Seal"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F9AD}",
  },
  tier: 5,
  baseAttack: 3,
  baseHealth: 8,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: sealAbility(1),
  level2Ability: sealAbility(2),
  level3Ability: sealAbility(3),
};

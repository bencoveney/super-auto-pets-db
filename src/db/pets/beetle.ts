import { Ability, Pet, Trigger } from "..";
import { getPetIdentifiers } from "../database";

function beetleAbility(level: number): Ability {
  return {
    description: `Eat shop food: Give shop animals +${level} health`,
    trigger: Trigger.EatsShopFood,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      healthAmount: level,
      target: {
        kind: "EachShopAnimal",
        includingFuture: false,
      },
      untilEndOfBattle: false,
    },
  };
}

export const beetle: Pet = {
  ...getPetIdentifiers("Beetle"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1FAB2}",
  },
  tier: 1,
  baseAttack: 2,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: beetleAbility(1),
  level2Ability: beetleAbility(2),
  level3Ability: beetleAbility(3),
};

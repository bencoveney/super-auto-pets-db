import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function duckAbility(level: number): Ability {
  return {
    description: `Sell: Give shop animals +${level} Health`,
    trigger: Trigger.Sell,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "EachShopAnimal",
        includingFuture: false,
      },
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const duck: Pet = {
  ...getPetIdentifiers("Duck"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F986}",
  },
  tier: 1,
  baseAttack: 2,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: duckAbility(1),
  level2Ability: duckAbility(2),
  level3Ability: duckAbility(3),
};

import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";

export const cannedFood: Food = {
  ...getFoodIdentifiers("Canned Food"),
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F96B}",
  },
  tier: 4,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give all current and future shop animals +2/+2.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "EachShopAnimal",
        includingFuture: true,
      },
      attackAmount: 2,
      healthAmount: 2,
      untilEndOfBattle: false,
    },
  },
};

import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";

export const apple: Food = {
  ...getFoodIdentifiers("Apple"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F34E}",
  },
  tier: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal +1/+1.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "PurchaseTarget",
      },
      attackAmount: 1,
      healthAmount: 1,
      untilEndOfBattle: false,
    },
  },
};

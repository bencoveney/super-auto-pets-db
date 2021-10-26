import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";

export const pear: Food = {
  ...getFoodIdentifiers("Pear"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F350}",
  },
  tier: 4,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal +2/+2.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "PurchaseTarget",
      },
      attackAmount: 2,
      healthAmount: 2,
      untilEndOfBattle: false,
    },
  },
};

import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";

export const milk: Food = {
  ...getFoodIdentifiers("Milk"),
  notes: "This is free!",
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F95B}",
  },
  tier: "Summoned",
  packs: ["StandardPack", "ExpansionPack1"],
  cost: 0,
  ability: {
    description: "Give an animal +1/2/3 attack and +2/4/6 health (depending on level of Cow).",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "PurchaseTarget",
      },
      attackAmount: "?",
      healthAmount: "?",
      untilEndOfBattle: false,
    },
  },
};

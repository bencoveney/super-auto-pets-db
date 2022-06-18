import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";

export const chocolate: Food = {
  ...getFoodIdentifiers("Chocolate"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F36B}",
  },
  tier: 5,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal +1 Experience.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "GainExperience",
      target: {
        kind: "PurchaseTarget",
      },
      amount: 1,
    },
  },
};

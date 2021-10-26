import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";

export const chocolate: Food = {
  ...getFoodIdentifiers("Chocolate"),
  image: {
    source: "twemoji",
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

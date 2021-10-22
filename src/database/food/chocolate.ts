import { Food, Trigger } from "..";

export const chocolate = {
  name: "Chocolate",
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
} as Food;

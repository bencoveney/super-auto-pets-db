import { Food, Trigger } from "..";

export const apple = {
  name: "Apple",
  image: {
    source: "twemoji",
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
} as Food;

import { Food, Trigger } from "..";

export const milk = {
  name: "Milk",
  notes: "This is free!",
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F95B}",
  },
  tier: "Summoned",
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
} as Food;

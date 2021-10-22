import { Food, Trigger } from "..";

export const pear = {
  name: "Pear",
  image: {
    source: "twemoji",
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
} as Food;

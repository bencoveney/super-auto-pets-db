import { Food, Trigger } from "..";

export const cupcake = {
  name: "Cupcake",
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F9C1}",
  },
  tier: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal +3/+3 until end of battle.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "PurchaseTarget",
      },
      attackAmount: 3,
      healthAmount: 3,
      untilEndOfBattle: true,
    },
  },
} as Food;

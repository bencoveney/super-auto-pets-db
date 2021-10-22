import { Food, Trigger } from "..";

export const sleepingPill = {
  name: "Sleeping Pill",
  image: {
    source: "fxemoji",
    unicodeCodePoint: "\u{1F48A}",
    name: "pill",
  },
  tier: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Make a friendly animal faint.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "Faint",
      target: {
        kind: "PurchaseTarget",
      },
    },
  },
} as Food;

import { Food, Trigger } from "..";

export const steak = {
  name: "Steak",
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F969}",
  },
  tier: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal Steak Attack.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ApplyStatus",
      to: {
        kind: "PurchaseTarget",
      },
      status: {
        name: "SteakAttack",
      },
    },
  },
} as Food;

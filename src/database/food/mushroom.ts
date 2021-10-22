import { Food, Trigger } from "..";

export const mushroom = {
  name: "Mushroom",
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F344}",
  },
  tier: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal Extra Life.",
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
        name: "ExtraLife",
      },
    },
  },
} as Food;

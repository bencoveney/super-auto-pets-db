import { Food, Trigger } from "..";

export const garlic = {
  name: "Garlic",
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F9C4}",
  },
  tier: 3,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal Garlic Armor.",
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
        name: "GarlicArmor",
      },
    },
  },
} as Food;

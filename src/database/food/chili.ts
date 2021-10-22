import { Food, Trigger } from "..";

export const chili = {
  name: "Chili",
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F336}",
  },
  tier: 5,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal Splash Attack.",
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
        name: "SplashAttack",
      },
    },
  },
} as Food;

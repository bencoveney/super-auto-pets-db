import { Food, Trigger } from "..";

export const meatBone = {
  name: "Meat Bone",
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F356}",
  },
  tier: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal Bone Attack.",
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
        name: "BoneAttack",
      },
    },
  },
} as Food;

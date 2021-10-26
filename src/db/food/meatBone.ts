import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";
import { boneAttack } from "../statusEffects/boneAttack";

export const meatBone: Food = {
  ...getFoodIdentifiers("Meat Bone"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
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
      status: boneAttack.id,
    },
  },
};

import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";
import { garlicArmor } from "../statusEffects/garlicArmor";

export const garlic: Food = {
  ...getFoodIdentifiers("Garlic"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
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
      status: garlicArmor.id,
    },
  },
};

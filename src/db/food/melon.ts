import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";
import { melonArmor } from "../statusEffects/melonArmor";

export const melon: Food = {
  ...getFoodIdentifiers("Melon"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F348}",
  },
  tier: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal Melon Armor.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ApplyStatus",
      to: {
        kind: "PurchaseTarget",
      },
      status: melonArmor.id,
    },
  },
};

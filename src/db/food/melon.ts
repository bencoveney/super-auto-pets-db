import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";

export const melon: Food = {
  ...getFoodIdentifiers("Melon"),
  image: {
    source: "twemoji",
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
      status: {
        name: "MelonArmor",
      },
    },
  },
};

import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";

export const garlic: Food = {
  ...getFoodIdentifiers("Garlic"),
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
};

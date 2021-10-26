import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";
import { splashAttack } from "../statusEffects/splashAttack";

export const chili: Food = {
  ...getFoodIdentifiers("Chili"),
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
      status: splashAttack.id,
    },
  },
};

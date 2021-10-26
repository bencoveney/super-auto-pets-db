import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";
import { honeyBee } from "../statusEffects/honeyBee";

export const honey: Food = {
  ...getFoodIdentifiers("Honey"),
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F36F}",
  },
  tier: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal Honey Bee.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ApplyStatus",
      to: {
        kind: "PurchaseTarget",
      },
      status: honeyBee.id,
    },
  },
};

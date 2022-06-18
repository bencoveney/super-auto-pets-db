import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";

export const sleepingPill: Food = {
  ...getFoodIdentifiers("Sleeping Pill"),
  image: {
    source: "fxemoji",
    commit: "270af343bee346d8221f87806d2b1eee0438431a",
    unicodeCodePoint: "\u{1F48A}",
    name: "pill",
  },
  notes: "This costs 1 gold.",
  tier: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  cost: 1,
  ability: {
    description: "Make a friendly animal faint.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "Faint",
      target: {
        kind: "PurchaseTarget",
      },
    },
  },
};

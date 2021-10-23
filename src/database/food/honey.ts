import { Food, Pet, Trigger } from "..";

export const beeSummoned: Pet = {
  name: "Bee",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F41D}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: 1,
  baseHealth: 1,
};

export const honey: Food = {
  name: "Honey",
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
      status: {
        name: "HoneyBee",
      },
    },
  },
};

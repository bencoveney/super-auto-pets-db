import { Pet } from "..";

export const scorpion = {
  name: "Scorpion",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F982}",
  },
  tier: 5,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  status: {
    name: "PoisinAttack",
  },
} as Pet;

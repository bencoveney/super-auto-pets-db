import { Pet } from "..";

// TODO: Represent the fact that it knocks out enemies.
export const scorpion = {
  name: "Scorpion",
  unicodeCodePoint: "\u{1F982}",
  tier: 5,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
} as Pet;

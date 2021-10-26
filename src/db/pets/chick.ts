import { Pet } from "..";
import { getPetIdentifiers } from "../database";

export const chick: Pet = {
  ...getPetIdentifiers("Chick"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F424}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: 1,
};

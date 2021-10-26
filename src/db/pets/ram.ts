import { Pet } from "..";
import { getPetIdentifiers } from "../database";

export const ram: Pet = {
  ...getPetIdentifiers("Ram"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F40F}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: "?",
};

import { Pet } from "..";
import { getPetIdentifiers } from "../database";

export const zombieCricket: Pet = {
  ...getPetIdentifiers("Zombie Cricket"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F997}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: "?",
};

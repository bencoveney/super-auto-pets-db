import { Pet } from "..";
import { getPetIdentifiers } from "../database";

export const zombieFly: Pet = {
  ...getPetIdentifiers("Zombie Fly"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1FAB0}",
  },
  packs: ["StandardPack"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: "?",
};

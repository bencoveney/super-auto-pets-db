import { Pet } from "..";
import { getPetIdentifiers } from "../database";

export const zombieFly: Pet = {
  ...getPetIdentifiers("Zombie Fly"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1FAB0}",
  },
  packs: ["StandardPack"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: "?",
};

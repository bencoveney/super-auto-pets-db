import { Pet } from "..";
import { getPetIdentifiers } from "../database";

export const chick: Pet = {
  ...getPetIdentifiers("Chick"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F424}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: 1,
};

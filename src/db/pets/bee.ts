import { Pet } from "..";
import { getPetIdentifiers } from "../database";

export const bee: Pet = {
  ...getPetIdentifiers("Bee"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F41D}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: 1,
  baseHealth: 1,
};

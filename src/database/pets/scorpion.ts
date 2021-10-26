import { Pet } from "..";
import { getPetIdentifiers } from "../database";

export const scorpion: Pet = {
  ...getPetIdentifiers("Scorpion"),
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
};

import { Pet } from "..";
import { getPetIdentifiers } from "../database";

export const dirtyRat: Pet = {
  ...getPetIdentifiers("Dirty Rat"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F400}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: 1,
  baseHealth: 1,
  // TODO: whenever the animal in front of it attacks the rat will do 1 damage to it
};

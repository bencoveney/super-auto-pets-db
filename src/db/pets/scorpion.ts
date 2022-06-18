import { Pet } from "..";
import { getPetIdentifiers } from "../database";
import { poisonAttack } from "../statusEffects/poisonAttack";

export const scorpion: Pet = {
  ...getPetIdentifiers("Scorpion"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F982}",
  },
  tier: 5,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  status: poisonAttack.id,
};

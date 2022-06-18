import { Pet } from "..";
import { getPetIdentifiers } from "../database";

export const sloth: Pet = {
  ...getPetIdentifiers("Sloth"),
  notes:
    "Has no special ability. Is kind of lame combat-wise. But he truly believes in you!",
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F9A5}",
  },
  tier: 1,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1", "EasterEgg"],
};

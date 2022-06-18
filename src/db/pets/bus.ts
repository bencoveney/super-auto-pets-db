import { Pet } from "..";
import { getPetIdentifiers } from "../database";
import { splashAttack } from "../statusEffects/splashAttack";

export const bus: Pet = {
  ...getPetIdentifiers("Bus"),
  image: {
    source: "noto-emoji",
    commit: "f2a4f72bffe0212c72949a22698be235269bfab5",
    unicodeCodePoint: "\u{1F68C}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: "?",
  status: splashAttack.id,
};

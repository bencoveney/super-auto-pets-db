import { Pet } from "..";
import { getPetIdentifiers } from "../database";
import { splashAttack } from "../statusEffects/splashAttack";

export const bus: Pet = {
  ...getPetIdentifiers("Bus"),
  image: {
    source: "noto-emoji",
    // TODO: Incorrect. Not sure where the right bus should come from
    unicodeCodePoint: "\u{1F68D}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: "?",
  status: splashAttack.id,
};

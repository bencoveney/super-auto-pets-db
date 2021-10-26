import { Pet } from "..";
import { getPetIdentifiers } from "../database";

export const butterfly: Pet = {
  ...getPetIdentifiers("Butterfly"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F98B}",
  },
  // TODO: Represent this as a summoned behaviour.
  notes: "Summoned: Copy Attack and Health from most healthy friend.",
  tier: "Summoned",
  baseAttack: 1,
  baseHealth: 1,
  packs: ["ExpansionPack1"],
};

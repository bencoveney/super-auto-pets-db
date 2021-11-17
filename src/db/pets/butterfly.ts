import { Pet, Trigger } from "..";
import { getPetIdentifiers } from "../database";

export const butterfly: Pet = {
  ...getPetIdentifiers("Butterfly"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F98B}",
  },
  notes:
    "Summoned: Copy stats of the strongest friend (highest attack and health combined).",
  tier: "Summoned",
  baseAttack: 1,
  baseHealth: 1,
  packs: ["ExpansionPack1"],
  level1Ability: {
    description:
      "Copy stats of the strongest friend (highest attack and health combined).",
    trigger: Trigger.Summoned,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "TransferStats",
      copyAttack: true,
      copyHealth: true,
      from: {
        kind: "StrongestFriend",
      },
      to: {
        kind: "Self",
      },
    },
  },
};

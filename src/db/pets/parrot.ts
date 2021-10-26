import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function parrotAbility(level: number): Ability {
  return {
    description: `End Turn: Copy the Lvl. ${level} ability from animal ahead.`,
    trigger: Trigger.EndOfTurn,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "TransferAbility",
      from: {
        kind: "FriendAhead",
        n: level,
      },
      to: {
        kind: "Self",
      },
      level: level,
    },
  };
}

export const parrot: Pet = {
  ...getPetIdentifiers("Parrot"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F99C}",
  },
  tier: 5,
  baseAttack: 3,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: parrotAbility(1),
  level2Ability: parrotAbility(2),
  level3Ability: parrotAbility(3),
};

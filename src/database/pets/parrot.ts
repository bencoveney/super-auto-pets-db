import { Ability, Trigger, Pet } from "..";

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

export const parrot = {
  name: "Parrot",
  unicodeCodePoint: "\u{1F99C}",
  tier: 5,
  baseAttack: 3,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: parrotAbility(1),
  level2Ability: parrotAbility(2),
  level3Ability: parrotAbility(3),
} as Pet;

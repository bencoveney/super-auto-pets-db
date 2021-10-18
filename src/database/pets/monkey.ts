import { Ability, Trigger, Pet } from "..";

function monkeyAbility(level: number): Ability {
  return {
    description: `End turn: Give right-most friend +${level * 2}/+${level * 2}`,
    trigger: Trigger.EndOfTurn,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "RightMostFriend",
      },
      attackAmount: level * 2,
      healthAmount: level * 2,
      untilEndOfBattle: false,
    },
  };
}

export const monkey = {
  name: "Monkey",
  unicodeCodePoint: "\u{1F412}",
  tier: 4,
  baseAttack: 3,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: monkeyAbility(1),
  level2Ability: monkeyAbility(2),
  level3Ability: monkeyAbility(3),
} as Pet;

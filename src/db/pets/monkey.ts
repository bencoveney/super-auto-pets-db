import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function monkeyAbility(level: number): Ability {
  return {
    description: `End turn: Give right-most friend +${level * 2}/+${level * 3}`,
    trigger: Trigger.EndOfTurn,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "RightMostFriend",
      },
      attackAmount: level * 2,
      healthAmount: level * 3,
      untilEndOfBattle: false,
    },
  };
}

export const monkey: Pet = {
  ...getPetIdentifiers("Monkey"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F412}",
  },
  tier: 5,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: monkeyAbility(1),
  level2Ability: monkeyAbility(2),
  level3Ability: monkeyAbility(3),
};

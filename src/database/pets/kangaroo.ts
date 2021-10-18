import { Ability, Trigger, Pet } from "..";

function kangarooAbility(level: number): Ability {
  return {
    description: `Friend ahead attacks: Gain +${level * 2}/+${level * 2}`,
    trigger: Trigger.AfterAttack,
    triggeredBy: {
      kind: "FriendAhead",
      n: 1,
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "Self",
      },
      attackAmount: level * 2,
      healthAmount: level * 2,
      untilEndOfBattle: false,
    },
  };
}

export const kangaroo = {
  name: "Kangaroo",
  unicodeCodePoint: "\u{1F998}",
  tier: 3,
  baseAttack: 2,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: kangarooAbility(1),
  level2Ability: kangarooAbility(2),
  level3Ability: kangarooAbility(3),
} as Pet;

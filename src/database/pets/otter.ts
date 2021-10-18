import { Ability, Trigger, Pet } from "..";

function otterAbility(level: number): Ability {
  return {
    description: `Buy: Give a random friend +${level}/+${level}`,
    trigger: Trigger.Buy,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "RandomFriend",
        n: 1,
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const otter = {
  name: "Otter",
  unicodeCodePoint: "\u{1F9A6}",
  tier: 1,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: otterAbility(1),
  level2Ability: otterAbility(2),
  level3Ability: otterAbility(3),
} as Pet;

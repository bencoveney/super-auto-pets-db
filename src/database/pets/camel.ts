import { Ability, Trigger, Pet } from "..";

function camelAbility(level: number): Ability {
  return {
    description: `Hurt: Give friend behind +${level}/+${level * 2}`,
    trigger: Trigger.Hurt,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "FriendBehind",
        n: 1,
      },
      attackAmount: level,
      healthAmount: level * 2,
      untilEndOfBattle: false,
    },
  };
}

export const camel = {
  name: "Camel",
  unicodeCodePoint: "\u{1F42B}",
  tier: 3,
  baseAttack: 2,
  baseHealth: 5,
  packs: ["StandardPack"],
  level1Ability: camelAbility(1),
  level2Ability: camelAbility(2),
  level3Ability: camelAbility(3),
} as Pet;

import { Ability, Trigger, Pet } from "..";

function fishAbility(level: number): Ability {
  return {
    description: `Level-up: Give all friends +${level}/+${level}`,
    trigger: Trigger.LevelUp,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "EachFriend",
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const fish = {
  name: "Fish",
  // TODO: Incorrect. Use Mozilla fish.
  unicodeCodePoint: "\u{1F41F}",
  tier: 1,
  baseAttack: 2,
  baseHealth: 3,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: fishAbility(1),
  level2Ability: fishAbility(2),
} as Pet;

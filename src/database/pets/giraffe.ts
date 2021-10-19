import { Ability, Trigger, Pet } from "..";

function giraffeAbility(level: number): Ability {
  return {
    description: `End turn: Give ${level} friends ahead +1/+1`,
    trigger: Trigger.EndOfTurn,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "FriendAhead",
        n: level,
      },
      attackAmount: 1,
      healthAmount: 1,
      untilEndOfBattle: false,
    },
  };
}

export const giraffe = {
  name: "Giraffe",
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F992}",
  },
  tier: 3,
  baseAttack: 1,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: {
    ...giraffeAbility(1),
    description: `End turn: Give friend ahead +1/+1`,
  },
  level2Ability: giraffeAbility(2),
  level3Ability: giraffeAbility(3),
} as Pet;

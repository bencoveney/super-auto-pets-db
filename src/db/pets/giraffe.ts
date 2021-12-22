import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function giraffeAbility(level: number): Ability {
  return {
    description: `End turn: Give ${level} friends ahead +1/+1`,
    trigger: Trigger.EndOfTurn,
    triggeredBy: {
      kind: "Player",
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

export const giraffe: Pet = {
  ...getPetIdentifiers("Giraffe"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F992}",
  },
  tier: 3,
  baseAttack: 2,
  baseHealth: 5,
  packs: ["StandardPack"],
  level1Ability: {
    ...giraffeAbility(1),
    description: `End turn: Give friend ahead +1/+1`,
  },
  level2Ability: giraffeAbility(2),
  level3Ability: giraffeAbility(3),
};

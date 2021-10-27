import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function hatchingChickAbility(level: number): Ability {
  if (level <= 1) {
    return {
      description: `End turn: Give +5/+5 to friend ahead until end of battle.`,
      trigger: Trigger.EndOfTurn,
      triggeredBy: {
        kind: "Player",
      },
      effect: {
        kind: "ModifyStats",
        target: {
          kind: "FriendAhead",
          n: 1,
        },
        attackAmount: 5,
        healthAmount: 5,
        untilEndOfBattle: true,
      },
    };
  }

  if (level <= 2) {
    return {
      description: `End turn: Give +2/+2 to friend ahead.`,
      trigger: Trigger.EndOfTurn,
      triggeredBy: {
        kind: "Player",
      },
      effect: {
        kind: "ModifyStats",
        target: {
          kind: "FriendAhead",
          n: 1,
        },
        attackAmount: 2,
        healthAmount: 2,
        untilEndOfBattle: false,
      },
    };
  }

  return {
    description: `Start of turn: Give +1 Experience to friend ahead`,
    trigger: Trigger.StartOfTurn,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "GainExperience",
      target: {
        kind: "FriendAhead",
        n: 1,
      },
      amount: 1,
    },
  };
}

export const hatchingChick: Pet = {
  ...getPetIdentifiers("Hatching Chick"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F423}",
  },
  tier: 3,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["ExpansionPack1"],
  level1Ability: hatchingChickAbility(1),
  level2Ability: hatchingChickAbility(2),
  level3Ability: hatchingChickAbility(3),
};

import { Ability, Trigger, Pet } from "..";

function bisonAbility(level: number): Ability {
  return {
    description: `End turn: Gain +${level * 2}/+${
      level * 2
    } if there is at least one Lvl. 3 friend.`,
    trigger: Trigger.EndOfTurnWithLvl3Friend,
    triggeredBy: {
      kind: "Self",
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

export const bison = {
  name: "Bison",
  tier: 4,
  baseAttack: 6,
  baseHealth: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: bisonAbility(1),
  level2Ability: bisonAbility(2),
  level3Ability: bisonAbility(3),
} as Pet;

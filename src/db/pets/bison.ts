import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function bisonAbility(level: number): Ability {
  return {
    description: `End turn: Gain +${level * 2}/+${
      level * 2
    } if there is at least one Lvl. 3 friend.`,
    trigger: Trigger.EndOfTurnWithLvl3Friend,
    triggeredBy: {
      kind: "Player",
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

export const bison: Pet = {
  ...getPetIdentifiers("Bison"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F9AC}",
  },
  tier: 4,
  baseAttack: 6,
  baseHealth: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: bisonAbility(1),
  level2Ability: bisonAbility(2),
  level3Ability: bisonAbility(3),
};

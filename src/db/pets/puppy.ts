import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function puppyAbility(level: number): Ability {
  return {
    description: `End turn: If you have 3 or more gold, gain +${level * 2}/+${
      level * 2
    }`,
    trigger: Trigger.EndOfTurnWith3PlusGold,
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

export const puppy: Pet = {
  ...getPetIdentifiers("Puppy"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F415}",
  },
  tier: 3,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["ExpansionPack1"],
  level1Ability: puppyAbility(1),
  level2Ability: puppyAbility(2),
  level3Ability: puppyAbility(3),
};

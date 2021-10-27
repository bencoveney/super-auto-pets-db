import { Ability, Pet, Trigger } from "..";
import { getPetIdentifiers } from "../database";

function bluebirdAbility(level: number): Ability {
  return {
    description: `End turn: Give left-most friend +${level} attack`,
    trigger: Trigger.EndOfTurn,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "ModifyStats",
      attackAmount: level,
      target: {
        kind: "LeftMostFriend",
      },
      untilEndOfBattle: false,
    },
  };
}

export const bluebird: Pet = {
  ...getPetIdentifiers("Bluebird"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F426}",
  },
  tier: 1,
  baseAttack: 2,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: bluebirdAbility(1),
  level2Ability: bluebirdAbility(2),
  level3Ability: bluebirdAbility(3),
};

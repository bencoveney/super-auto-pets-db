import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function tyrannosaurusAbility(level: number): Ability {
  return {
    description: `End turn: If you have 3 or more gold, give other friends +${
      level * 1
    }/+${level * 1}`,
    trigger: Trigger.EndOfTurnWith3PlusGold,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "EachFriend",
      },
      attackAmount: level * 2,
      healthAmount: level * 2,
      untilEndOfBattle: false,
    },
  };
}

export const tyrannosaurus: Pet = {
  ...getPetIdentifiers("Tyrannosaurus"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F996}",
  },
  tier: 6,
  baseAttack: 9,
  baseHealth: 4,
  packs: ["ExpansionPack1"],
  level1Ability: tyrannosaurusAbility(1),
  level2Ability: tyrannosaurusAbility(2),
  level3Ability: tyrannosaurusAbility(3),
};

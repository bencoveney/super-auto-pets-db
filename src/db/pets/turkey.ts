import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function turkeyAbility(level: number): Ability {
  return {
    description: `Friend summoned: Give it +${level * 2}/+${level * 2}.`,
    trigger: Trigger.Summoned,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "TriggeringEntity",
      },
      attackAmount: level * 3,
      healthAmount: level * 3,
      untilEndOfBattle: false,
    },
  };
}

export const turkey: Pet = {
  ...getPetIdentifiers("Turkey"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F983}",
  },
  tier: 5,
  baseAttack: 3,
  baseHealth: 7,
  packs: ["StandardPack"],
  level1Ability: turkeyAbility(1),
  level2Ability: turkeyAbility(2),
  level3Ability: turkeyAbility(3),
};

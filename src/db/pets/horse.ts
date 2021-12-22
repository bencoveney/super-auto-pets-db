import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function horseAbility(level: number): Ability {
  return {
    description: `Friend summoned: Give it +${level} Attack until end of battle`,
    trigger: Trigger.Summoned,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "TriggeringEntity",
      },
      attackAmount: level,
      untilEndOfBattle: true,
    },
  };
}

export const horse: Pet = {
  ...getPetIdentifiers("Horse"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F40E}",
  },
  tier: 1,
  baseAttack: 2,
  baseHealth: 1,
  packs: ["StandardPack"],
  level1Ability: horseAbility(1),
  level2Ability: horseAbility(2),
  level3Ability: horseAbility(3),
};

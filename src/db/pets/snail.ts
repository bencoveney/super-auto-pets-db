import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function snailAbility(level: number): Ability {
  return {
    description: `Buy: If you lost last battle, give all friends +${
      level * 2
    }/+${level}`,
    trigger: Trigger.BuyAfterLoss,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "EachFriend",
      },
      attackAmount: level * 2,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const snail: Pet = {
  ...getPetIdentifiers("Snail"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F40C}",
  },
  tier: 3,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: snailAbility(1),
  level2Ability: snailAbility(2),
  level3Ability: snailAbility(3),
};

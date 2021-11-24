import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function shrimpAbility(level: number): Ability {
  return {
    description: `Friend sold: Give a random friend +${level} Health.`,
    trigger: Trigger.Sell,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "RandomFriend",
        n: 1,
      },
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const shrimp: Pet = {
  ...getPetIdentifiers("Shrimp"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F990}",
  },
  tier: 2,
  baseAttack: 2,
  baseHealth: 3,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: shrimpAbility(1),
  level2Ability: shrimpAbility(2),
  level3Ability: shrimpAbility(3),
};

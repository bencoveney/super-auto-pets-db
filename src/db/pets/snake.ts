import { Ability, Pet, Trigger } from "..";
import { getPetIdentifiers } from "../database";

function snakeAbility(level: number): Ability {
  return {
    description: `Friend ahead attacks: Deal ${
      level * 5
    } damage to a random enemy.`,
    trigger: Trigger.AfterAttack,
    triggeredBy: {
      kind: "FriendAhead",
      n: 1,
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "RandomEnemy",
        n: 1,
      },
      amount: level * 5,
    },
  };
}

export const snake: Pet = {
  ...getPetIdentifiers("Snake"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F40D}",
  },
  tier: 6,
  baseAttack: 6,
  baseHealth: 6,
  packs: ["StandardPack"],
  level1Ability: snakeAbility(1),
  level2Ability: snakeAbility(2),
  level3Ability: snakeAbility(3),
};

import { Ability, Pet, Trigger } from "..";

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

export const snake = {
  name: "Snake",
  tier: 6,
  baseAttack: 6,
  baseHealth: 6,
  packs: ["StandardPack"],
  level1Ability: snakeAbility(1),
  level2Ability: snakeAbility(2),
  level3Ability: snakeAbility(3),
} as Pet;

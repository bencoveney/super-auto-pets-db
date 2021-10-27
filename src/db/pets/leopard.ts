import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function leopardAbility(level: number): Ability {
  return {
    description: `Start of battle: Deal 50% Attack damage to ${level} random enemies.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "RandomEnemy",
        n: level,
      },
      amount: { attackDamagePercent: 50 },
    },
  };
}

export const leopard: Pet = {
  ...getPetIdentifiers("Leopard"),
  image: {
    source: "fxemoji",
    commit: "270af343bee346d8221f87806d2b1eee0438431a",
    name: "leopardside",
    unicodeCodePoint: "\u{1F406}",
  },
  tier: 6,
  baseAttack: 6,
  baseHealth: 4,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: {
    ...leopardAbility(1),
    description: `Start of battle: Deal 50% Attack damage to a random enemy.`,
  },
  level2Ability: leopardAbility(2),
  level3Ability: leopardAbility(3),
};

import { Ability, Trigger, Pet } from "..";

function crocodileAbility(level: number): Ability {
  return {
    description: `Start of battle: Deal ${level * 7} damage to the last enemy`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "None",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "LowestHealthEnemy",
      },
      amount: level * 7,
    },
  };
}

export const crocodile = {
  name: "Crocodile",
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F40A}",
  },
  tier: 5,
  baseAttack: 6,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: crocodileAbility(1),
  level2Ability: crocodileAbility(2),
  level3Ability: crocodileAbility(3),
} as Pet;

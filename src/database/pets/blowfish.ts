import { Ability, Pet, Trigger } from "..";

function blowfishAbility(level: number): Ability {
  return {
    description: `Hurt: Deal ${level * 2} damage to a random enemy.`,
    trigger: Trigger.Hurt,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "RandomEnemy",
        n: 1,
      },
      amount: level * 2,
    },
  };
}

export const blowfish = {
  name: "Blowfish",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F421}",
  },
  tier: 3,
  baseAttack: 3,
  baseHealth: 5,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: blowfishAbility(1),
  level2Ability: blowfishAbility(2),
  level3Ability: blowfishAbility(3),
} as Pet;

import { Ability, Trigger, Pet } from "..";

function hedgehogAbility(level: number): Ability {
  return {
    description: `Faint: Deal ${level * 2} damage to all.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "All",
      },
      amount: level * 2,
    },
  };
}

export const hedgehog = {
  name: "Hedgehog",
  unicodeCodePoint: "\u{1F994}",
  tier: 2,
  baseAttack: 3,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: hedgehogAbility(1),
  level2Ability: hedgehogAbility(2),
  level3Ability: hedgehogAbility(3),
} as Pet;

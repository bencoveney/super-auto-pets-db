import { Ability, Trigger, Pet } from "..";

function rhinoAbility(level: number): Ability {
  return {
    description: `Knock out: Deal ${level * 4} damage to the first enemy.`,
    trigger: Trigger.KnockOut,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "FirstEnemy",
      },
      amount: level * 4,
    },
  };
}

export const rhino = {
  name: "Rhino",
  unicodeCodePoint: "\u{1F98F}",
  tier: 5,
  baseAttack: 5,
  baseHealth: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: rhinoAbility(1),
  level2Ability: rhinoAbility(2),
  level3Ability: rhinoAbility(3),
} as Pet;

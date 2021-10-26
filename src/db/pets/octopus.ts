import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function octopusAbility(level: number): Ability {
  if (level <= 1) {
    return {
      description: `Level-up: Gain +8/+8.`,
      trigger: Trigger.LevelUp,
      triggeredBy: {
        kind: "Self",
      },
      effect: {
        kind: "ModifyStats",
        target: {
          kind: "Self",
        },
        attackAmount: 8,
        healthAmount: 8,
        untilEndOfBattle: false,
      },
    };
  }

  if (level <= 2) {
    return {
      description: `Level-up: Gain +8/+8 and a new ability.`,
      trigger: Trigger.LevelUp,
      triggeredBy: {
        kind: "Self",
      },
      effect: {
        kind: "AllOf",
        effects: [
          {
            kind: "ModifyStats",
            target: {
              kind: "Self",
            },
            attackAmount: 8,
            healthAmount: 8,
            untilEndOfBattle: false,
          },
          {
            kind: "GainAbility",
            target: {
              kind: "Self",
            },
          },
        ],
      },
    };
  }

  return {
    description: `Before attack: Deal 5 damage to all enemies`,
    trigger: Trigger.BeforeAttack,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "EachEnemy",
      },
      amount: 5,
    },
  };
}

export const octopus: Pet = {
  ...getPetIdentifiers("Octopus"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F419}",
  },
  tier: 6,
  baseAttack: 8,
  baseHealth: 8,
  packs: ["ExpansionPack1"],
  level1Ability: octopusAbility(1),
  level2Ability: octopusAbility(2),
  level3Ability: octopusAbility(3),
};

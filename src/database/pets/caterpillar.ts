import { Ability, Trigger, Pet } from "..";

function caterpillarAbility(level: number): Ability {
  if (level <= 2) {
    return {
      description: `Start of turn: Gain 1 Experience`,
      trigger: Trigger.StartOfTurn,
      triggeredBy: {
        kind: "Self",
      },
      effect: {
        kind: "GainExperience",
        target: {
          kind: "Self",
        },
        amount: 1,
      },
    };
  }

  return {
    description: `Start of battle: Evolve into a Butterfly`,
    trigger: Trigger.StartOfTurn,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "Evolve",
    },
  };
}

export const caterpillar = {
  name: "Caterpillar",
  tier: 3,
  baseAttack: 1,
  baseHealth: 4,
  packs: ["ExpansionPack1"],
  level1Ability: caterpillarAbility(1),
  level2Ability: caterpillarAbility(2),
  level3Ability: caterpillarAbility(3),
} as Pet;

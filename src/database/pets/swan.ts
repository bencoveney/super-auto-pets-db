import { Ability, Trigger, Pet } from "..";

function swanAbility(level: number): Ability {
  return {
    description: `Start of turn: Gain 1 gold.`,
    trigger: Trigger.StartOfTurn,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "GainGold",
      amount: level,
    },
  };
}

export const swan = {
  name: "Swan",
  tier: 2,
  baseAttack: 3,
  baseHealth: 4,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: swanAbility(1),
  level2Ability: swanAbility(2),
  level3Ability: swanAbility(3),
} as Pet;

import { Ability, Trigger, Pet } from "..";

const chick: Pet = {
  name: "Chick",
  tier: "Summoned",
  baseAttack: -1,
  baseHealth: -1,
};

function roosterAbility(level: number): Ability {
  return {
    description: `Faint: Summon ${level} Chicks with the same Attack as this.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: chick,
      // TODO: Represent copied attack value.
    },
  };
}

export const rooster = {
  name: "Rooster",
  tier: 4,
  baseAttack: 3,
  baseHealth: 3,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: {
    ...roosterAbility(1),
    description: "Faint: Summon a Chick with the same Attack as this.",
  },
  level2Ability: roosterAbility(2),
  level3Ability: roosterAbility(3),
} as Pet;

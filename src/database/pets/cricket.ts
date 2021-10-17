import { Ability, Pet, Trigger } from "..";

const cricketSummoned: Pet = {
  name: "Cricket",
  tier: "Summoned",
  baseAttack: -1,
  baseHealth: -1,
};

function cricketAbility(level: number): Ability {
  return {
    description: `Faint: Summon a ${level}/${level} Cricket`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: {
        ...cricketSummoned,
        baseAttack: level,
        baseHealth: level,
      },
    },
  };
}

export const cricket = {
  name: "Cricket",
  tier: 1,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: cricketAbility(1),
  level2Ability: cricketAbility(2),
  level3Ability: cricketAbility(3),
} as Pet;

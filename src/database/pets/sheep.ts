import { Pet, Ability, Trigger } from "..";

const ramSummoned: Pet = {
  name: "Ram",
  tier: "Summoned",
  baseAttack: -1,
  baseHealth: -1,
};

function sheepAbility(level: number): Ability {
  return {
    description: `Faint: Summon two ${level * 2}/${level * 2} Rams`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: {
        ...ramSummoned,
        baseAttack: level * 2,
        baseHealth: level * 2,
      },
    },
  };
}

export const sheep = {
  name: "Sheep",
  tier: 3,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: sheepAbility(1),
  level2Ability: sheepAbility(2),
  level3Ability: sheepAbility(3),
} as Pet;

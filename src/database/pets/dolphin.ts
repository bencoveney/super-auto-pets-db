import { Ability, Trigger, Pet } from "..";

function dolphinAbility(level: number): Ability {
  return {
    description: `Start of battle: Deal ${
      level * 5
    } damage to the lowest health enemy`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "None",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "LowestHealthEnemy",
      },
      amount: level * 5,
    },
  };
}

export const dolphin = {
  name: "Dolphin",
  tier: 4,
  baseAttack: 4,
  baseHealth: 6,
  packs: ["StandardPack"],
  level1Ability: dolphinAbility(1),
  level2Ability: dolphinAbility(2),
  level3Ability: dolphinAbility(3),
} as Pet;

import { Ability, Trigger, Pet } from "..";

function wormAbility(level: number): Ability {
  return {
    description: `Eats shop food: Gain +${level}/+${level}`,
    trigger: Trigger.EatsShopFood,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      attackAmount: level,
      healthAmount: level,
      target: {
        kind: "Self",
      },
      untilEndOfBattle: false,
    },
  };
}

export const worm = {
  name: "Worm",
  tier: 4,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: wormAbility(1),
  level2Ability: wormAbility(2),
  level3Ability: wormAbility(3),
} as Pet;

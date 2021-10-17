import { Ability, Trigger, Pet } from "..";

function squirrelAbility(level: number): Ability {
  return {
    description: `Buy: Clear and fill shops with food.`,
    trigger: Trigger.LevelUp,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "RefillShops",
      shop: "All",
      food: "Any",
    },
  };
}

export const squirrel = {
  name: "Squirrel",
  tier: 4,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: squirrelAbility(1),
  level2Ability: squirrelAbility(2),
  level3Ability: squirrelAbility(3),
} as Pet;

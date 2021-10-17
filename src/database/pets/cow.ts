import { Ability, Trigger, Pet } from "..";

function cowAbility(level: number): Ability {
  return {
    description: `Buy: Replace food shop with 2 free milk that gives +2/+2.`,
    trigger: Trigger.Buy,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "RefillShops",
      shop: "Food",
      food: "Milk",
    },
  };
}

export const cow = {
  name: "Cow",
  tier: 5,
  baseAttack: 4,
  baseHealth: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: cowAbility(1),
  level2Ability: cowAbility(2),
  level3Ability: cowAbility(3),
} as Pet;

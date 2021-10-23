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
      // TODO: Represent milk.
      // Give an animal +2/+2
      // This is free!
      food: "Milk",
    },
  };
}

export const cow = {
  name: "Cow",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F404}",
  },
  tier: 5,
  baseAttack: 4,
  baseHealth: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  // TODO: Does not upgrade when levelling.
  level1Ability: cowAbility(1),
  level2Ability: cowAbility(2),
  level3Ability: cowAbility(3),
} as Pet;

import { Ability, Trigger, Pet } from "..";

function badgerAbility(level: number): Ability {
  return {
    description: `Faint: Deal Attack damage to adjacent animals`,
    trigger: Trigger.EatsShopFood,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "AdjacentAnimals",
      },
      amount: { attackDamagePercent: 100 },
    },
  };
}

export const badger = {
  name: "Badger",
  unicodeCodePoint: "\u{1F9A1}",
  tier: 3,
  baseAttack: 5,
  baseHealth: 4,
  packs: ["StandardPack"],
  level1Ability: badgerAbility(1),
  level2Ability: badgerAbility(2),
  level3Ability: badgerAbility(3),
} as Pet;

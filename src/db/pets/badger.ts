import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

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

export const badger: Pet = {
  ...getPetIdentifiers("Badger"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F9A1}",
  },
  tier: 3,
  baseAttack: 5,
  baseHealth: 4,
  packs: ["StandardPack"],
  level1Ability: badgerAbility(1),
  level2Ability: badgerAbility(2),
  level3Ability: badgerAbility(3),
};

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function octopusAbility(level: number): Ability {
    return {
      description: `Before attack: Deal ${level*3} damage to 2 random enemies.`,
      trigger: Trigger.BeforeAttack,
      triggeredBy: {
        kind: "Self",
      },
      effect: {
        kind: "DealDamage",
        target: {
          kind: "RandomEnemy",
          n: 2,
        },
        amount: level*3,
      },
    };
}
      
export const octopus: Pet = {
  ...getPetIdentifiers("Octopus"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F419}",
  },
  tier: 6,
  baseAttack: 8,
  baseHealth: 8,
  packs: ["ExpansionPack1"],
  level1Ability: octopusAbility(1),
  level2Ability: octopusAbility(2),
  level3Ability: octopusAbility(3),
}

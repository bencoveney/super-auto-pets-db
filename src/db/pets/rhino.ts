import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function rhinoAbility(level: number): Ability {
  return {
    description: `Knock out: Deal ${level * 4} damage to the first enemy.`,
    trigger: Trigger.KnockOut,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "FirstEnemy",
      },
      amount: level * 4,
    },
  };
}

export const rhino: Pet = {
  ...getPetIdentifiers("Rhino"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F98F}",
  },
  tier: 5,
  baseAttack: 5,
  baseHealth: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: rhinoAbility(1),
  level2Ability: rhinoAbility(2),
  level3Ability: rhinoAbility(3),
};

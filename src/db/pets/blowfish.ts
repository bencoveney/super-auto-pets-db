import { Ability, Pet, Trigger } from "..";
import { getPetIdentifiers } from "../database";

function blowfishAbility(level: number): Ability {
  return {
    description: `Hurt: Deal ${level * 2} damage to a random enemy.`,
    trigger: Trigger.Hurt,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "RandomEnemy",
        n: 1,
      },
      amount: level * 2,
    },
  };
}

export const blowfish: Pet = {
  ...getPetIdentifiers("Blowfish"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F421}",
  },
  tier: 3,
  baseAttack: 3,
  baseHealth: 5,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: blowfishAbility(1),
  level2Ability: blowfishAbility(2),
  level3Ability: blowfishAbility(3),
};

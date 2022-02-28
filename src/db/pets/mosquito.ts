import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function mosquitoAbility(level: number): Ability {
  const enemy = level == 1 ? "enemy" : "enemies";
  return {
    description: `Start of battle: Deal ${level} damage to ${level} random ${enemy}.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "RandomEnemy",
        n: level,
      },
      amount: 1,
    },
  };
}

export const mosquito: Pet = {
  ...getPetIdentifiers("Mosquito"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F99F}",
  },
  tier: 1,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: mosquitoAbility(1),
  level2Ability: mosquitoAbility(2),
  level3Ability: mosquitoAbility(3),
};

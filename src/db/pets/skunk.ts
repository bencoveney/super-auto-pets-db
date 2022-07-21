import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function skunkAbility(level: number): Ability {
  const percentage = level * 33;
  return {
    description: `Start of battle: Reduce the highest Health enemy by ${percentage}%.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "ReduceHealth",
      target: {
        kind: "HighestHealthEnemy",
      },
      percentage,
    },
  };
}

export const skunk: Pet = {
  ...getPetIdentifiers("Skunk"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F9A8}",
  },
  tier: 4,
  baseAttack: 3,
  baseHealth: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: skunkAbility(1),
  level2Ability: skunkAbility(2),
  level3Ability: skunkAbility(3),
};

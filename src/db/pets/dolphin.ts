import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function dolphinAbility(level: number): Ability {
  return {
    description: `Start of battle: Deal ${
      level * 5
    } damage to the lowest health enemy`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "LowestHealthEnemy",
      },
      amount: level * 5,
    },
  };
}

export const dolphin: Pet = {
  ...getPetIdentifiers("Dolphin"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F42C}",
  },
  tier: 4,
  baseAttack: 4,
  baseHealth: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: dolphinAbility(1),
  level2Ability: dolphinAbility(2),
  level3Ability: dolphinAbility(3),
};

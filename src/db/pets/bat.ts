import { Ability, Pet, Trigger } from "..";
import { getPetIdentifiers } from "../database";
import { weak } from "../statusEffects/weak";

function batAbility(level: number): Ability {
  return {
    description: `Start of battle: Make ${level} enemies Weak.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "ApplyStatus",
      status: weak.id,
      to: {
        kind: "RandomEnemy",
        n: level,
      },
    },
  };
}

export const bat: Pet = {
  ...getPetIdentifiers("Bat"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F987}",
  },
  tier: 2,
  baseAttack: 1,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: {
    ...batAbility(1),
    description: "Start of battle: Make 1 enemy Weak.",
  },
  level2Ability: batAbility(2),
  level3Ability: batAbility(3),
};

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";
import { butterfly } from "./butterfly";

function caterpillarAbility(level: number): Ability {
  if (level <= 2) {
    return {
      description: `Start of turn: Gain 1 Experience`,
      trigger: Trigger.StartOfTurn,
      triggeredBy: {
        kind: "Self",
      },
      effect: {
        kind: "GainExperience",
        target: {
          kind: "Self",
        },
        amount: 1,
      },
    };
  }

  return {
    description: `Start of battle: Evolve into a Butterfly`,
    trigger: Trigger.StartOfTurn,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "Evolve",
      into: butterfly.id,
    },
  };
}

export const caterpillar: Pet = {
  ...getPetIdentifiers("Caterpillar"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F41B}",
  },
  tier: 3,
  baseAttack: 1,
  baseHealth: 4,
  packs: ["ExpansionPack1"],
  level1Ability: caterpillarAbility(1),
  level2Ability: caterpillarAbility(2),
  level3Ability: caterpillarAbility(3),
};

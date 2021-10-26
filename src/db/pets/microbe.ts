import { Ability, Pet, Trigger } from "..";
import { getPetIdentifiers } from "../database";
import { weak } from "../statusEffects/weak";

function microbeAbility(level: number): Ability {
  return {
    description: `Faint: Make all animals Weak.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ApplyStatus",
      status: weak.id,
      to: {
        kind: "All",
      },
    },
  };
}

export const microbe: Pet = {
  ...getPetIdentifiers("Microbe"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F9A0}",
  },
  tier: 5,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["ExpansionPack1"],
  level1Ability: microbeAbility(1),
  level2Ability: microbeAbility(2),
  level3Ability: microbeAbility(3),
};

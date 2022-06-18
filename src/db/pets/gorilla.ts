import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";
import { coconutShield } from "../statusEffects/coconutShield";

function gorillaAbility(level: number): Ability {
  return {
    description: `Hurt: Gain Coconut Shield.`,
    trigger: Trigger.Hurt,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ApplyStatus",
      status: coconutShield.id,
      to: {
        kind: "Self",
      },
    },
    maxTriggers: 1,
  };
}

export const gorilla: Pet = {
  ...getPetIdentifiers("Gorilla"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F98D}",
  },
  tier: 6,
  baseAttack: 6,
  baseHealth: 9,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: gorillaAbility(1),
  level2Ability: gorillaAbility(2),
  level3Ability: gorillaAbility(3),
};

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";
import { coconutShield } from "../statusEffects/coconutShield";

function gorillaAbility(level: number): Ability {
  return {
    // TODO: "Works 1 times per turn."
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
  };
}

export const gorilla: Pet = {
  ...getPetIdentifiers("Gorilla"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F98D}",
  },
  tier: 6,
  baseAttack: 6,
  baseHealth: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: gorillaAbility(1),
  level2Ability: gorillaAbility(2),
  level3Ability: gorillaAbility(3),
};

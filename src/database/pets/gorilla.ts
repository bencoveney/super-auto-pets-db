import { Ability, Trigger, Pet } from "..";

function gorillaAbility(level: number): Ability {
  return {
    description: `Hurt: Gain Coconut Shield.`,
    trigger: Trigger.Hurt,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ApplyStatus",
      status: {
        name: "CoconutShield",
      },
      to: {
        kind: "Self",
      },
    },
  };
}

export const gorilla = {
  name: "Gorilla",
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
} as Pet;

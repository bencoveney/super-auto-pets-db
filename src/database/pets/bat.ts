import { Ability, Pet, Trigger } from "..";

function batAbility(level: number): Ability {
  return {
    description: `Start of battle: Make ${level} enemies Weak.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ApplyStatus",
      status: {
        name: "Weak",
      },
      to: {
        kind: "RandomEnemy",
        n: level,
      },
    },
  };
}

export const bat = {
  name: "Bat",
  image: {
    source: "noto-emoji",
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
} as Pet;

import { Ability, Pet, Trigger } from "..";

export const busSummoned: Pet = {
  name: "Bus",
  image: {
    source: "noto-emoji",
    // TODO: Incorrect. Not sure where the right bus should come from
    unicodeCodePoint: "\u{1F68D}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: "?",
  status: {
    name: "SplashAttack",
  },
};

function deerAbility(level: number): Ability {
  return {
    description: `Faint: Summon a ${level * 5}/${
      level * 5
    } Bus with Splash Attack`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: {
        ...busSummoned,
        baseAttack: level * 5,
        baseHealth: level * 5,
      },
    },
  };
}

export const deer = {
  name: "Deer",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F98C}",
  },
  tier: 4,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: deerAbility(1),
  level2Ability: deerAbility(2),
  level3Ability: deerAbility(3),
} as Pet;

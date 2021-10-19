import { Pet, Ability, Trigger } from "..";

const dirtyRatSummoned: Pet = {
  name: "Dirty Rat",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F400}",
  },
  tier: "Summoned",
  baseAttack: 1,
  baseHealth: 1,
  // TODO: Represent random attacks?
};

function ratAbility(level: number): Ability {
  return {
    description: `Faint: summon one ${level}/${level} Dirty Rat for the opponent that betrays him.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: dirtyRatSummoned,
    },
  };
}

export const rat = {
  name: "Rat",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F400}",
  },
  tier: 2,
  baseAttack: 4,
  baseHealth: 5,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: ratAbility(1),
  level2Ability: ratAbility(2),
  level3Ability: ratAbility(3),
} as Pet;

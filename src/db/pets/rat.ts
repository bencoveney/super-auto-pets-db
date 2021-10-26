import { Pet, Ability, Trigger } from "..";
import { getPetIdentifiers } from "../database";

export const dirtyRatSummoned: Pet = {
  ...getPetIdentifiers("Dirty Rat"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F400}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: 1,
  baseHealth: 1,
  // TODO: whenever the animal in front of it attacks the rat will do 1 damage to it
};

function ratAbility(level: number): Ability {
  return {
    description: `Faint: summon one 1/1 Dirty Rat for the opponent that betrays him.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: dirtyRatSummoned.id,
      team: "Enemy",
    },
  };
}

export const rat: Pet = {
  ...getPetIdentifiers("Rat"),
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
};

import { Ability, Trigger, Pet } from "..";

export const chick: Pet = {
  name: "Chick",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F424}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: 1,
};

function roosterAbility(level: number): Ability {
  return {
    description: `Faint: Summon ${level} Chicks with the same Attack as this.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: chick,
      // TODO: Represent copied attack value.
    },
  };
}

export const rooster = {
  name: "Rooster",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F413}",
  },
  tier: 4,
  baseAttack: 3,
  baseHealth: 3,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: {
    ...roosterAbility(1),
    description: "Faint: Summon a Chick with the same Attack as this.",
  },
  level2Ability: roosterAbility(2),
  level3Ability: roosterAbility(3),
} as Pet;

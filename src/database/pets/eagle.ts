import { Ability, Trigger, Pet } from "..";

function eagleAbility(level: number): Ability {
  return {
    description: `Faint: Summon one Lvl. ${level} tier 6 animal.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: {
        // TODO: Summon correct pet.
        name: "Tier 6 animal",
        image: {
          source: "noto-emoji",
          unicodeCodePoint: "\u{1F985}",
        },
        tier: "Summoned",
        // TODO: Don't specify stats here.
        baseAttack: -1,
        baseHealth: -1,
        // TODO: Specify level here.
      },
    },
  };
}

export const eagle = {
  name: "Eagle",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F985}",
  },
  tier: 5,
  baseAttack: 6,
  baseHealth: 5,
  packs: ["ExpansionPack1"],
  level1Ability: eagleAbility(1),
  level2Ability: eagleAbility(2),
  level3Ability: eagleAbility(3),
} as Pet;

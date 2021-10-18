import { Ability, Trigger, Pet } from "..";

const flySummoned: Pet = {
  name: "Fly",
  unicodeCodePoint: "\u{1FAB0}",
  tier: "Summoned",
  baseAttack: -1,
  baseHealth: -1,
};

function flyAbility(level: number): Ability {
  return {
    description: `Friend faints: Summon a ${level * 2}/${
      level * 2
    } fly in its place`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "SummonPet",
      pet: {
        ...flySummoned,
        baseAttack: level * 2,
        baseHealth: level * 2,
      },
    },
  };
}

export const fly = {
  name: "Fly",
  unicodeCodePoint: "\u{1FAB0}",
  tier: 6,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: flyAbility(1),
  level2Ability: flyAbility(2),
  level3Ability: flyAbility(3),
} as Pet;

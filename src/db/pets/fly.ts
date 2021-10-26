import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

export const flySummoned: Pet = {
  ...getPetIdentifiers("Zombie Fly"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1FAB0}",
  },
  packs: ["StandardPack"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: "?",
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
      team: "Friendly",
    },
  };
}

export const fly: Pet = {
  ...getPetIdentifiers("Fly"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1FAB0}",
  },
  tier: 6,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: flyAbility(1),
  level2Ability: flyAbility(2),
  level3Ability: flyAbility(3),
};

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function tropicalFishAbility(level: number): Ability {
  return {
    description: `End turn: Give adjacent friends +${level} Health`,
    trigger: Trigger.EndOfTurn,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "AdjacentFriends",
      },
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const tropicalFish: Pet = {
  ...getPetIdentifiers("Tropical Fish"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F420}",
  },
  tier: 3,
  baseAttack: 2,
  baseHealth: 4,
  packs: ["ExpansionPack1"],
  level1Ability: tropicalFishAbility(1),
  level2Ability: tropicalFishAbility(2),
  level3Ability: tropicalFishAbility(3),
};

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function dogAbility(level: number): Ability {
  return {
    description: `Friend summoned: Gain +${level} Attack or +${level} Health.`,
    trigger: Trigger.Summoned,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "OneOf",
      effects: [
        {
          kind: "ModifyStats",
          untilEndOfBattle: false,
          target: {
            kind: "Self",
          },
          attackAmount: level,
        },
        {
          kind: "ModifyStats",
          untilEndOfBattle: false,
          target: {
            kind: "Self",
          },
          healthAmount: level,
        },
      ],
    },
  };
}

export const dog: Pet = {
  ...getPetIdentifiers("Dog"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F415}",
  },
  tier: 3,
  baseAttack: 3,
  baseHealth: 3,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: dogAbility(1),
  level2Ability: dogAbility(2),
  level3Ability: dogAbility(3),
};

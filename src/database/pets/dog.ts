import { Ability, Trigger, Pet } from "..";

function dogAbility(level: number): Ability {
  return {
    description: `Friend summoned: Gain +${level} Attack or +${level} Health.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Self",
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

export const dog = {
  name: "Dog",
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F415}",
  },
  tier: 2,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: dogAbility(1),
  level2Ability: dogAbility(2),
  level3Ability: dogAbility(3),
} as Pet;

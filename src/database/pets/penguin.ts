import { Ability, Trigger, Pet } from "..";

function penguinAbility(level: number): Ability {
  return {
    description: `End turn: Give other Lvl. 2 and 3 friends +${level}/+${level}`,
    trigger: Trigger.EndOfTurn,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "Level2And3Friends",
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const penguin = {
  name: "Penguin",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F427}",
  },
  tier: 4,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: penguinAbility(1),
  level2Ability: penguinAbility(2),
  level3Ability: penguinAbility(3),
} as Pet;

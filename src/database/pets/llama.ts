import { Ability, Trigger, Pet } from "..";

function llamaAbility(level: number): Ability {
  return {
    // Fewer???
    description: `End turn: If you have 4 or less animals, gain +${
      level * 2
    }/+${level * 2}.`,
    trigger: Trigger.EndOfTurnWith4OrLessAnimals,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "Self",
      },
      attackAmount: level * 2,
      healthAmount: level * 2,
      untilEndOfBattle: false,
    },
  };
}

export const llama = {
  name: "Llama",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F999}",
  },
  tier: 4,
  baseAttack: 2,
  baseHealth: 5,
  packs: ["ExpansionPack1"],
  level1Ability: llamaAbility(1),
  level2Ability: llamaAbility(2),
  level3Ability: llamaAbility(3),
} as Pet;

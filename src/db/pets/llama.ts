import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function llamaAbility(level: number): Ability {
  return {
    // Fewer???
    description: `End turn: If you have 4 or less animals, gain +${
      level * 2
    }/+${level * 2}.`,
    trigger: Trigger.EndOfTurnWith4OrLessAnimals,
    triggeredBy: {
      kind: "Player",
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

export const llama: Pet = {
  ...getPetIdentifiers("Llama"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F999}",
  },
  tier: 4,
  baseAttack: 2,
  baseHealth: 5,
  packs: ["ExpansionPack1"],
  level1Ability: llamaAbility(1),
  level2Ability: llamaAbility(2),
  level3Ability: llamaAbility(3),
};

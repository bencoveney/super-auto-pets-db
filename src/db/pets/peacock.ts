import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function peacockAbility(level: number): Ability {
  return {
    description: `Hurt: Gain ${level * 2} Attack.`,
    trigger: Trigger.Hurt,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "Self",
      },
      attackAmount: level * 2,
      untilEndOfBattle: false,
    },
  };
}

export const peacock: Pet = {
  ...getPetIdentifiers("Peacock"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F99A}",
  },
  tier: 2,
  baseAttack: 1,
  baseHealth: 5,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: peacockAbility(1),
  level2Ability: peacockAbility(2),
  level3Ability: peacockAbility(3),
};

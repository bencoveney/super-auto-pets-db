import { Ability, Trigger, Pet } from "..";

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

export const peacock = {
  name: "Peacock",
  unicodeCodePoint: "\u{1F99A}",
  tier: 2,
  baseAttack: 3,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: peacockAbility(1),
  level2Ability: peacockAbility(2),
  level3Ability: peacockAbility(3),
} as Pet;

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function swanAbility(level: number): Ability {
  return {
    description: `Start of turn: Gain ${level} gold.`,
    trigger: Trigger.StartOfTurn,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "GainGold",
      amount: level,
    },
  };
}

export const swan: Pet = {
  ...getPetIdentifiers("Swan"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F9A2}",
  },
  tier: 2,
  baseAttack: 1,
  baseHealth: 3,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: swanAbility(1),
  level2Ability: swanAbility(2),
  level3Ability: swanAbility(3),
};

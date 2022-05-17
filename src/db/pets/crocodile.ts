import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function crocodileAbility(level: number): Ability {
  return {
    description: `Start of battle: Deal 8 damage to the last enemy. Repeat ${level} times.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "LastEnemy",
      },
      amount: 8,
      times: level
    },
  };
}

export const crocodile: Pet = {
  ...getPetIdentifiers("Crocodile"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F40A}",
  },
  tier: 5,
  baseAttack: 8,
  baseHealth: 4,
  packs: ["StandardPack"],
  level1Ability: crocodileAbility(1),
  level2Ability: crocodileAbility(2),
  level3Ability: crocodileAbility(3),
};

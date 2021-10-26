import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function lobsterAbility(level: number): Ability {
  return {
    description: `Friend summoned: Give it +${level * 2}/+${
      level * 2
    } when not in battle.`,
    trigger: Trigger.Summoned,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "TriggeringEntity",
      },
      attackAmount: level * 2,
      healthAmount: level * 2,
      untilEndOfBattle: false,
    },
  };
}

export const lobster: Pet = {
  ...getPetIdentifiers("Lobster"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F99E}",
  },
  tier: 4,
  baseAttack: 3,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: lobsterAbility(1),
  level2Ability: lobsterAbility(2),
  level3Ability: lobsterAbility(3),
};

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function fishAbility(level: number): Ability {
  return {
    description: `Level-up: Give all friends +${level}/+${level}`,
    trigger: Trigger.LevelUp,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "EachFriend",
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const fish: Pet = {
  ...getPetIdentifiers("Fish"),
  image: {
    source: "fxemoji",
    commit: "270af343bee346d8221f87806d2b1eee0438431a",
    name: "fish",
    unicodeCodePoint: "\u{1F41F}",
  },
  tier: 1,
  baseAttack: 2,
  baseHealth: 3,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: fishAbility(1),
  level2Ability: fishAbility(2),
};

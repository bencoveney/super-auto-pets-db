import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function buffaloAbility(level: number): Ability {
  return {
    description: `Friend bought: Gain +${level}/+${level}`,
    trigger: Trigger.Buy,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "Self",
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const buffalo: Pet = {
  ...getPetIdentifiers("Buffalo"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F403}",
  },
  tier: 4,
  baseAttack: 5,
  baseHealth: 5,
  packs: ["ExpansionPack1"],
  level1Ability: buffaloAbility(1),
  level2Ability: buffaloAbility(2),
  level3Ability: buffaloAbility(3),
};
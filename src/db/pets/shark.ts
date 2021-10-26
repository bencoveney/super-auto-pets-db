import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function sharkAbility(level: number): Ability {
  return {
    description: `Friend faints: Gain +${level * 2}/+${level}.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "Self",
      },
      attackAmount: level * 2,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const shark: Pet = {
  ...getPetIdentifiers("Shark"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F988}",
  },
  tier: 5,
  baseAttack: 4,
  baseHealth: 4,
  packs: ["StandardPack"],
  level1Ability: sharkAbility(1),
  level2Ability: sharkAbility(2),
  level3Ability: sharkAbility(3),
};

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function sharkAbility(level: number): Ability {
  return {
    description: `Friend faints: Gain +${level * 2}/+${level * 2}.`,
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
      healthAmount: level * 2,
      untilEndOfBattle: false,
    },
  };
}

export const shark: Pet = {
  ...getPetIdentifiers("Shark"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
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

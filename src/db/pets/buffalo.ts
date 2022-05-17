import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function buffaloAbility(level: number): Ability {
  return {
    description: `Buy friend: Gain +${level}/+${level}. Works 3 times per turn.`,
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
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
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

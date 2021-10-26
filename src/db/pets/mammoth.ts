import { Ability, Pet, Trigger } from "..";
import { getPetIdentifiers } from "../database";

function mammothAbility(level: number): Ability {
  return {
    description: `Faint: Give all friends +${level * 2}/+${level * 2}`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      attackAmount: level * 2,
      healthAmount: level * 2,
      target: {
        kind: "EachFriend",
      },
      untilEndOfBattle: false,
    },
  };
}

export const mammoth: Pet = {
  ...getPetIdentifiers("Mammoth"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F9A3}",
  },
  tier: 6,
  baseAttack: 2,
  baseHealth: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: mammothAbility(1),
  level2Ability: mammothAbility(2),
  level3Ability: mammothAbility(3),
};

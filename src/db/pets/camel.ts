import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function camelAbility(level: number): Ability {
  return {
    description: `Hurt: Give +${level*2}/+${level*2} to friend behind.`,
    trigger: Trigger.Hurt,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "FriendBehind",
        n: 1,
      },
      attackAmount: level * 2,
      healthAmount: level * 2,
      untilEndOfBattle: true,
    },
  };
}

export const camel: Pet = {
  ...getPetIdentifiers("Camel"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F42B}",
  },
  tier: 3,
  baseAttack: 2,
  baseHealth: 6,
  packs: ["StandardPack"],
  level1Ability: camelAbility(1),
  level2Ability: camelAbility(2),
  level3Ability: camelAbility(3),
};

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function otterAbility(level: number): Ability {
  const friend = level == 1 ? "friend" : "friends";
  return {
    description: `Buy: Give ${level} random ${friend} +1/+1`,
    trigger: Trigger.Buy,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "RandomFriend",
        n: 1,
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const otter: Pet = {
  ...getPetIdentifiers("Otter"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F9A6}",
  },
  tier: 1,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: otterAbility(1),
  level2Ability: otterAbility(2),
  level3Ability: otterAbility(3),
};

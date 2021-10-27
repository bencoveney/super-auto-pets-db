import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function dragonAbility(level: number): Ability {
  return {
    description: `Buy tier 1 animal: Give all friends +${level}/+${level}.`,
    trigger: Trigger.BuyTier1Animal,
    triggeredBy: {
      kind: "Player",
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

export const dragon: Pet = {
  ...getPetIdentifiers("Dragon"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F409}",
  },
  tier: 6,
  baseAttack: 6,
  baseHealth: 8,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: dragonAbility(1),
  level2Ability: dragonAbility(2),
  level3Ability: dragonAbility(3),
};

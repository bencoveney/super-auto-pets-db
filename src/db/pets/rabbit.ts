import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function rabbitAbility(level: number): Ability {
  return {
    description: `Pet eats shop food: Give it +${level} Health`,
    trigger: Trigger.EatsShopFood,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "TriggeringEntity",
      },
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const rabbit: Pet = {
  ...getPetIdentifiers("Rabbit"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F407}",
  },
  tier: 3,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: rabbitAbility(1),
  level2Ability: rabbitAbility(2),
  level3Ability: rabbitAbility(3),
};

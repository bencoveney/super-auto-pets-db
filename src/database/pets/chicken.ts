import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function chickenAbility(level: number): Ability {
  return {
    description: `Buy tier 1 animal: Give current and future shop animals +${level}/+${level}`,
    trigger: Trigger.BuyTier1Animal,
    triggeredBy: {
      // TODO: Should by be a property of shop animals rather than friends?
      kind: "EachFriend",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "EachShopAnimal",
        includingFuture: false,
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const chicken: Pet = {
  ...getPetIdentifiers("Chicken"),
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F413}",
  },
  tier: 5,
  baseAttack: 3,
  baseHealth: 4,
  packs: ["ExpansionPack1"],
  level1Ability: chickenAbility(1),
  level2Ability: chickenAbility(2),
  level3Ability: chickenAbility(3),
};

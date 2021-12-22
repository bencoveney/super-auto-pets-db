import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function chickenAbility(level: number): Ability {
  return {
    description: `Buy tier 1 animal: Give current and future shop animals +${level}/+${level}`,
    trigger: Trigger.BuyTier1Animal,
    triggeredBy: {
      kind: "Player",
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
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F413}",
  },
  tier: 5,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["ExpansionPack1"],
  level1Ability: chickenAbility(1),
  level2Ability: chickenAbility(2),
  level3Ability: chickenAbility(3),
};

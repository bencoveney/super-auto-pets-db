import { Ability, Trigger, Pet } from "..";

function dragonAbility(level: number): Ability {
  return {
    description: `Buy tier 1 animal: Give all friends +${level}/+${level}.`,
    trigger: Trigger.BuyTier1Animal,
    triggeredBy: {
      // TODO: Should by be a property of shop animals rather than friends?
      kind: "EachFriend",
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

export const dragon = {
  name: "Dragon",
  unicodeCodePoint: "\u{1F409}",
  tier: 6,
  baseAttack: 6,
  baseHealth: 8,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: dragonAbility(1),
  level2Ability: dragonAbility(2),
  level3Ability: dragonAbility(3),
} as Pet;

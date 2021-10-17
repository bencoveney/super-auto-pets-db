import { Ability, Trigger, Pet } from "..";

function shrimpAbility(level: number): Ability {
  return {
    description: `Friend sold: Give a random friend +${level} Health.`,
    trigger: Trigger.Sell,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "RandomFriend",
        n: 1,
      },
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const shrimp = {
  name: "Shrimp",
  tier: 2,
  baseAttack: 2,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: shrimpAbility(1),
  level2Ability: shrimpAbility(2),
  level3Ability: shrimpAbility(3),
} as Pet;

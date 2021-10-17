import { Ability, Pet, Trigger } from "..";

function beaverAbility(level: number): Ability {
  return {
    description: `Sell: Give two random friends +${level} health`,
    trigger: Trigger.Sell,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      healthAmount: level,
      target: {
        kind: "RandomFriend",
        n: 2,
      },
      untilEndOfBattle: false,
    },
  };
}

export const beaver = {
  name: "Beaver",
  tier: 1,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: beaverAbility(1),
  level2Ability: beaverAbility(2),
  level3Ability: beaverAbility(3),
} as Pet;

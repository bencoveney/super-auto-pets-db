import { Ability, Trigger, Pet } from "..";

function rabbitAbility(level: number): Ability {
  return {
    description: `Friend eats shop food: Give it +${level} Health`,
    trigger: Trigger.EatsShopFood,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "TriggeringEntity",
      },
      attackAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const rabbit = {
  name: "Rabbit",
  tier: 3,
  baseAttack: 3,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: rabbitAbility(1),
  level2Ability: rabbitAbility(2),
  level3Ability: rabbitAbility(3),
} as Pet;

import { Ability, Trigger, Pet } from "..";

function tropicalFishAbility(level: number): Ability {
  return {
    description: `End turn: Give adjacent friends +${level} Health`,
    trigger: Trigger.EndOfTurn,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "AdjacentFriends",
      },
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const tropicalFish = {
  name: "TropicalFish",
  tier: 3,
  baseAttack: 2,
  baseHealth: 4,
  packs: ["ExpansionPack1"],
  level1Ability: tropicalFishAbility(1),
  level2Ability: tropicalFishAbility(2),
  level3Ability: tropicalFishAbility(3),
} as Pet;

import { Ability, Trigger, Pet } from "..";

function horseAbility(level: number): Ability {
  return {
    description: `Friend summoned: Give it +${level} Attack until end of battle`,
    trigger: Trigger.Summoned,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "TriggeringEntity",
      },
      attackAmount: level,
      untilEndOfBattle: true,
    },
  };
}

export const horse = {
  name: "Horse",
  tier: 1,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["StandardPack"],
  level1Ability: horseAbility(1),
  level2Ability: horseAbility(2),
  level3Ability: horseAbility(3),
} as Pet;

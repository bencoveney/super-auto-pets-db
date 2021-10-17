import { Ability, Trigger, Pet } from "..";

function flamingoAbility(level: number): Ability {
  return {
    description: `Faint: Give the two friends behind +${level}/+${level}.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "FriendBehind",
        n: 2,
      },
      attackAmount: +level,
      healthAmount: +level,
      untilEndOfBattle: false,
    },
  };
}

export const flamingo = {
  name: "Flamingo",
  tier: 2,
  baseAttack: 3,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: flamingoAbility(1),
  level2Ability: flamingoAbility(2),
  level3Ability: flamingoAbility(3),
} as Pet;

import { Ability, Trigger, Pet } from "..";

function crabAbility(level: number): Ability {
  return {
    description: `Start of battle: Copy Health from friend ahead.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "TransferStats",
      copyAttack: false,
      copyHealth: true,
      from: {
        kind: "FriendAhead",
        n: 1,
      },
      to: {
        kind: "Self",
      },
    },
  };
}

export const crab = {
  name: "Crab",
  tier: 2,
  baseAttack: 3,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: crabAbility(1),
  level2Ability: crabAbility(2),
  level3Ability: crabAbility(3),
} as Pet;

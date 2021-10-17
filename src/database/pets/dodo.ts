import { Ability, Trigger, Pet } from "..";

function dodoAbility(level: number): Ability {
  return {
    description: `Start of battle: Give Attack to ${level} friends ahead.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "TransferStats",
      copyAttack: true,
      copyHealth: false,
      from: {
        kind: "Self",
      },
      to: {
        kind: "FriendAhead",
        n: level,
      },
    },
  };
}

export const dodo = {
  name: "Dodo",
  tier: 2,
  baseAttack: 1,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: {
    ...dodoAbility(1),
    description: `Start of battle: Give Attack to friend ahead.`,
  },
  level2Ability: dodoAbility(2),
  level3Ability: dodoAbility(3),
} as Pet;

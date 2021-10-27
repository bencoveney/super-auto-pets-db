import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function dodoAbility(level: number): Ability {
  return {
    description: `Start of battle: Give Attack to ${level} friends ahead.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Player",
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

export const dodo: Pet = {
  ...getPetIdentifiers("Dodo"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F9A4}",
  },
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
};

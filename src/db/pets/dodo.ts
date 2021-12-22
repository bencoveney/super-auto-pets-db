import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function dodoAbility(level: number): Ability {
  return {
    description: `Start of battle: Give ${level * 50}% Attack to friend ahead.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      // TODO: Stat gain is a percentage rather than n friends.
      kind: "TransferStats",
      copyAttack: true,
      copyHealth: false,
      from: {
        kind: "Self",
      },
      to: {
        kind: "FriendAhead",
        n: 1,
      },
      percentage: level * 50,
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
  baseAttack: 2,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: dodoAbility(1),
  level2Ability: dodoAbility(2),
  level3Ability: dodoAbility(3),
};

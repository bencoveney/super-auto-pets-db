import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function crabAbility(level: number): Ability {
  return {
    description: `Start of battle: Copy Health from friend ahead.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      // TODO: How exactly do these transfer from pet to pet?
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

export const crab: Pet = {
  ...getPetIdentifiers("Crab"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F980}",
  },
  tier: 2,
  baseAttack: 3,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: crabAbility(1),
  level2Ability: crabAbility(2),
  level3Ability: crabAbility(3),
};

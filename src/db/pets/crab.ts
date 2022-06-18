import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function crabAbility(level: number): Ability {
  const percent = level*50
  return {
    description: `Buy: Copy ${percent}% Health from the most healthy friend.`,
    trigger: Trigger.Buy,
    triggeredBy: {
      kind: "Player",
    },
     effect: {
      kind: "TransferStats",
      copyAttack: false,
      copyHealth: true,
      from: {
        kind: "HighestHealthFriend",
      },
      to: {
        kind: "Self",
      },
      percentage: percent,
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

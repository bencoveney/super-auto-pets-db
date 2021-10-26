import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function whaleAbility(level: number): Ability {
  return {
    description: `Start of battle: Swallow friend ahead and release it as a level ${level} after fainting.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      // TODO: This should probably be represented as 2 abilities, but I would need 2 triggers.
      kind: "Swallow",
      target: {
        kind: "FriendAhead",
        n: 1,
      },
    },
  };
}

export const whale: Pet = {
  ...getPetIdentifiers("Whale"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F40B}",
  },
  tier: 3,
  baseAttack: 2,
  baseHealth: 6,
  packs: ["StandardPack"],
  level1Ability: whaleAbility(1),
  level2Ability: whaleAbility(2),
  level3Ability: whaleAbility(3),
};

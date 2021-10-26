import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function pigAbility(level: number): Ability {
  return {
    description: `Sell: Gain an extra ${level} gold`,
    trigger: Trigger.Sell,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "GainGold",
      amount: level,
    },
  };
}

export const pig: Pet = {
  ...getPetIdentifiers("Pig"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F416}",
  },
  tier: 1,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: pigAbility(1),
  level2Ability: pigAbility(2),
  level3Ability: pigAbility(3),
};

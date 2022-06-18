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
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F416}",
  },
  tier: 1,
  baseAttack: 4,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: pigAbility(1),
  level2Ability: pigAbility(2),
  level3Ability: pigAbility(3),
};

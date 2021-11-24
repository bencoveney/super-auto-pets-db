import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function sauropodAbility(level: number): Ability {
  return {
    description: `Buy food: Gain 1 gold.`,
    trigger: Trigger.BuyFood,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "GainGold",
      amount: 1,
    },
    maxTriggers: 3,
  };
}

export const sauropod: Pet = {
  ...getPetIdentifiers("Sauropod"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F995}",
  },
  tier: 6,
  baseAttack: 4,
  baseHealth: 12,
  packs: ["ExpansionPack1"],
  level1Ability: sauropodAbility(1),
  level2Ability: sauropodAbility(2),
  level3Ability: sauropodAbility(3),
};

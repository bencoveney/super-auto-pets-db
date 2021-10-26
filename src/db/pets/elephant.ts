import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function elephantAbility(level: number): Ability {
  return {
    description: `Before Attack: Deal 1 damage to ${level} friends behind.`,
    trigger: Trigger.BeforeAttack,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "FriendBehind",
        n: level,
      },
      amount: 1,
    },
  };
}

export const elephant: Pet = {
  ...getPetIdentifiers("Elephant"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F418}",
  },
  tier: 2,
  baseAttack: 3,
  baseHealth: 5,
  packs: ["StandardPack"],
  level1Ability: elephantAbility(1),
  level2Ability: elephantAbility(2),
  level3Ability: elephantAbility(3),
};

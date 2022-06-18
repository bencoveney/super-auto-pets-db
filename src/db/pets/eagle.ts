import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function eagleAbility(level: number): Ability {
  return {
    description: `Faint: Summon one Lvl. ${level} tier 6 animal.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonRandomPet",
      tier: 6,
      // TODO: What are the stats?
      level: level,
    },
  };
}

export const eagle: Pet = {
  ...getPetIdentifiers("Eagle"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F985}",
  },
  tier: 5,
  baseAttack: 6,
  baseHealth: 5,
  packs: ["ExpansionPack1"],
  level1Ability: eagleAbility(1),
  level2Ability: eagleAbility(2),
  level3Ability: eagleAbility(3),
};

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function peacockAbility(level: number): Ability {
  return {
    description: `Hurt: Gain 50% more Attack. Works ${level} time(s) per turn.`,
    trigger: Trigger.Hurt,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "Self",
      },      
      attackAmount: "?",
      untilEndOfBattle: false,
    },
  };
}

export const peacock: Pet = {
  ...getPetIdentifiers("Peacock"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F99A}",
  },
  tier: 2,
  baseAttack: 2,
  baseHealth: 5,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: peacockAbility(1),
  level2Ability: peacockAbility(2),
  level3Ability: peacockAbility(3),
};

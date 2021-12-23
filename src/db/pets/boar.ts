import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function boarAbility(level: number): Ability {
  return {
    description: `Before attack: Gain +${level * 2}/+${level * 2}.`,
    trigger: Trigger.BeforeAttack,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "Self",
      },
      attackAmount: level * 2,
      healthAmount: level * 2,
      untilEndOfBattle: false,
    },
  };
}

export const boar: Pet = {
  ...getPetIdentifiers("Boar"),
  image: {
    source: "noto-emoji",
    commit: "f2a4f72bffe0212c72949a22698be235269bfab5",
    unicodeCodePoint: "\u{1F417}",
  },
  tier: 6,
  baseAttack: 8,
  baseHealth: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: boarAbility(1),
  level2Ability: boarAbility(2),
  level3Ability: boarAbility(3),
};

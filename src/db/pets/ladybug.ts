import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function ladybugAbility(level: number): Ability {
  return {
    description: `Buy food: Gain +${level}/+${level} until end of battle`,
    trigger: Trigger.BuyFood,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      attackAmount: level,
      healthAmount: level,
      target: {
        kind: "Self",
      },
      untilEndOfBattle: true,
    },
  };
}

export const ladybug: Pet = {
  ...getPetIdentifiers("Ladybug"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F41E}",
  },
  tier: 1,
  baseAttack: 1,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: ladybugAbility(1),
  level2Ability: ladybugAbility(2),
  level3Ability: ladybugAbility(3),
};

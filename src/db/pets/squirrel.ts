import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function squirrelAbility(level: number): Ability {
  return {
    description: `Buy: Clear and fill shops with food.`,
    trigger: Trigger.LevelUp,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "RefillShops",
      shop: "All",
      food: "Any",
    },
  };
}

export const squirrel: Pet = {
  ...getPetIdentifiers("Squirrel"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    // TODO: Shouldn't this be \u{1F43F}\u{FE0F} ?
    unicodeCodePoint: "\u{1F43F}",
  },
  tier: 4,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: squirrelAbility(1),
  level2Ability: squirrelAbility(2),
  level3Ability: squirrelAbility(3),
};

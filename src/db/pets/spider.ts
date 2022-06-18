import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function spiderAbility(level: number): Ability {
  return {
    description: `Faint: Summon a level ${level} tier 3 animal as a 2/2`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonRandomPet",
      tier: 3,
      baseAttack: 2,
      baseHealth: 2,
      level: level
    },
  };
}

export const spider: Pet = {
  ...getPetIdentifiers("Spider"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    // TODO: Shouldn't this be \u{1F577}\u{FE0F} ?
    unicodeCodePoint: "\u{1F577}",
  },
  tier: 2,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: spiderAbility(1),
  level2Ability: spiderAbility(2),
  level3Ability: spiderAbility(3),
};

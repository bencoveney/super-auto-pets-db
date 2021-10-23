import { Ability, Trigger, Pet } from "..";

function spiderAbility(level: number): Ability {
  return {
    description: `Faint: Summon one tier 3 animal as a ${level * 2}/${
      level * 2
    }.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonRandomPet",
      tier: 3,
      baseAttack: level * 2,
      baseAealth: level * 2,
    },
  };
}

export const spider = {
  name: "Spider",
  image: {
    source: "noto-emoji",
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
} as Pet;

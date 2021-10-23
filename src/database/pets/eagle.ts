import { Ability, Trigger, Pet } from "..";

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

export const eagle = {
  name: "Eagle",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F985}",
  },
  tier: 5,
  baseAttack: 6,
  baseHealth: 5,
  packs: ["ExpansionPack1"],
  level1Ability: eagleAbility(1),
  level2Ability: eagleAbility(2),
  level3Ability: eagleAbility(3),
} as Pet;

import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";
import { melonArmor } from "../statusEffects/melonArmor";

function turtleAbility(level: number): Ability {
  return {
    description: `Faint: Give ${level} friends behind Melon Armor`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ApplyStatus",
      status: melonArmor.id,
      to: {
        kind: "FriendBehind",
        n: level,
      },
    },
  };
}

export const turtle: Pet = {
  ...getPetIdentifiers("Turtle"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F422}",
  },
  tier: 3,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: {
    ...turtleAbility(1),
    description: "Faint: Give friend behind Melon Armor",
  },
  level2Ability: turtleAbility(2),
  level3Ability: turtleAbility(3),
};

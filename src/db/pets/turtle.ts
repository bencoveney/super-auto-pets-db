import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function turtleAbility(level: number): Ability {
  return {
    description: `Faint: Give ${level} friends behind Melon Armor`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ApplyStatus",
      status: {
        name: "MelonArmor",
      },
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
    unicodeCodePoint: "\u{1F422}",
  },
  tier: 3,
  baseAttack: 2,
  baseHealth: 4,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: {
    ...turtleAbility(1),
    description: "Faint: Give friend behind Melon Armor",
  },
  level2Ability: turtleAbility(2),
  level3Ability: turtleAbility(3),
};

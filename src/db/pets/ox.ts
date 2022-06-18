import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";
import { melonArmor } from "../statusEffects/melonArmor";

function oxAbility(level: number): Ability {
  return {
<<<<<<< HEAD
    description: `Friend ahead faints: Gain Melon Armor and +${level} Attack.`,
=======
    description: `Friend ahead faints: Gain Melon Armor and +${level * 2} attack.`,
>>>>>>> 4942c4cc5fa1979783a63d129b033aa0a93fe1a2
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "FriendAhead",
      n: 1,
    },
    effect: {
      kind: "AllOf",
      effects: [
        {
          kind: "ApplyStatus",
          status: melonArmor.id,
          to: {
            kind: "Self",
          },
        },
        {
          kind: "ModifyStats",
          target: {
            kind: "Self",
          },
          attackAmount: level,
          untilEndOfBattle: false,
        },
      ],
    },
  };
}

export const ox: Pet = {
  ...getPetIdentifiers("Ox"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F402}",
  },
  tier: 3,
  baseAttack: 1,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: oxAbility(1),
  level2Ability: oxAbility(2),
  level3Ability: oxAbility(3),
};

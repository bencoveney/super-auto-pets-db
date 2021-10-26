import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function tabbyCatAbility(level: number): Ability {
  return {
    description: `Eats shop food: Give friends +${level} Attack until end of battle`,
    trigger: Trigger.EatsShopFood,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "EachFriend",
      },
      attackAmount: level,
      untilEndOfBattle: true,
    },
  };
}

export const tabbyCat: Pet = {
  ...getPetIdentifiers("Tabby Cat"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F408}",
  },
  tier: 2,
  baseAttack: 4,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: tabbyCatAbility(1),
  level2Ability: tabbyCatAbility(2),
  level3Ability: tabbyCatAbility(3),
};

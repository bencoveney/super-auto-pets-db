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
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F408}",
  },
  tier: 2,
  baseAttack: 5,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: tabbyCatAbility(1),
  level2Ability: tabbyCatAbility(2),
  level3Ability: tabbyCatAbility(3),
};

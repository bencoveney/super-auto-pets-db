import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function dromedaryAbility(level: number): Ability {
  return {
    description: `Start of turn: Give shop animals +${level}/+${level}`,
    trigger: Trigger.StartOfTurn,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      untilEndOfBattle: false,
      target: {
        kind: "EachShopAnimal",
        includingFuture: false,
      },
      attackAmount: level,
      healthAmount: level,
    },
  };
}

export const dromedary: Pet = {
  ...getPetIdentifiers("Dromedary"),
  image: {
    source: "noto-emoji",
    commit: "f2a4f72bffe0212c72949a22698be235269bfab5",
    unicodeCodePoint: "\u{1F42A}",
  },
  tier: 2,
  baseAttack: 2,
  baseHealth: 4,
  packs: ["ExpansionPack1"],
  level1Ability: dromedaryAbility(1),
  level2Ability: dromedaryAbility(2),
  level3Ability: dromedaryAbility(3),
};

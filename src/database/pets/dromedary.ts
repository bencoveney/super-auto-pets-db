import { Ability, Trigger, Pet } from "..";

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

export const dromedary = {
  name: "Dromedary",
  image: {
    source: "noto-emoji",
    // TODO: Incorrect. Where is correct icon from?
    unicodeCodePoint: "\u{1F42A}",
  },
  tier: 2,
  baseAttack: 2,
  baseHealth: 4,
  packs: ["ExpansionPack1"],
  level1Ability: dromedaryAbility(1),
  level2Ability: dromedaryAbility(2),
  level3Ability: dromedaryAbility(3),
} as Pet;

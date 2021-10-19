import { Ability, Trigger, Pet } from "..";

function duckAbility(level: number): Ability {
  return {
    description: `Sell: Give shop animals +${level}/+${level}`,
    trigger: Trigger.Sell,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "EachShopAnimal",
        includingFuture: false,
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const duck = {
  name: "Duck",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F986}",
  },
  tier: 1,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: duckAbility(1),
  level2Ability: duckAbility(2),
  level3Ability: duckAbility(3),
} as Pet;

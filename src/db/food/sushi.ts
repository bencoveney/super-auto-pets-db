import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";

export const sushi: Food = {
  ...getFoodIdentifiers("Sushi"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F363}",
  },
  tier: 5,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give 3 random animals +1/+1.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "RandomFriend",
        n: 3,
      },
      attackAmount: 1,
      healthAmount: 1,
      untilEndOfBattle: false,
    },
  },
};

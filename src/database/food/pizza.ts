import { Food, Trigger } from "..";

export const pizza = {
  name: "Pizza",
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F355}",
  },
  tier: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give 2 random animals +2/+2.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "RandomFriend",
        n: 2,
      },
      attackAmount: 2,
      healthAmount: 2,
      untilEndOfBattle: false,
    },
  },
} as Food;

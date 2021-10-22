"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sushi = void 0;
exports.sushi = {
    name: "Sushi",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F363}",
    },
    tier: 5,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give 3 random animals +1/+1.",
        triggeredBy: {
            kind: "Self",
        },
        trigger: "Buy" /* Buy */,
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

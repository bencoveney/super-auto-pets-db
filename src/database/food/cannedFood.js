"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cannedFood = void 0;
exports.cannedFood = {
    name: "Canned Food",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F96B}",
    },
    tier: 4,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give all current and future shop animals +2/+2.",
        triggeredBy: {
            kind: "Self",
        },
        trigger: "Buy" /* Buy */,
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "EachShopAnimal",
                includingFuture: true,
            },
            attackAmount: 2,
            healthAmount: 2,
            untilEndOfBattle: false,
        },
    },
};

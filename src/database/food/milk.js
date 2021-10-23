"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.milk = void 0;
exports.milk = {
    name: "Milk",
    notes: "This is free!",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F95B}",
    },
    tier: "Summoned",
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give an animal +2/+2.",
        triggeredBy: {
            kind: "Self",
        },
        trigger: "Buy" /* Buy */,
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "PurchaseTarget",
            },
            attackAmount: 2,
            healthAmount: 2,
            untilEndOfBattle: false,
        },
    },
};

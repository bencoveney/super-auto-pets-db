"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apple = void 0;
exports.apple = {
    name: "Apple",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F34E}",
    },
    tier: 1,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give an animal +1/+1.",
        triggeredBy: {
            kind: "Self",
        },
        trigger: "Buy" /* Buy */,
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "PurchaseTarget",
            },
            attackAmount: 1,
            healthAmount: 1,
            untilEndOfBattle: false,
        },
    },
};

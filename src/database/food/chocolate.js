"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chocolate = void 0;
exports.chocolate = {
    name: "Chocolate",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F36B}",
    },
    tier: 5,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give an animal +1 Experience.",
        triggeredBy: {
            kind: "Self",
        },
        trigger: "Buy" /* Buy */,
        effect: {
            kind: "GainExperience",
            target: {
                kind: "PurchaseTarget",
            },
            amount: 1,
        },
    },
};

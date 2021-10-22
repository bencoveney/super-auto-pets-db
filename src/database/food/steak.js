"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.steak = void 0;
exports.steak = {
    name: "Steak",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F969}",
    },
    tier: 6,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give an animal Steak Attack.",
        triggeredBy: {
            kind: "Self",
        },
        trigger: "Buy" /* Buy */,
        effect: {
            kind: "ApplyStatus",
            to: {
                kind: "PurchaseTarget",
            },
            status: {
                name: "SteakAttack",
            },
        },
    },
};

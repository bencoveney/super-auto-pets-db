"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chili = void 0;
exports.chili = {
    name: "Chili",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F336}",
    },
    tier: 5,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give an animal Splash Attack.",
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
                name: "SplashAttack",
            },
        },
    },
};

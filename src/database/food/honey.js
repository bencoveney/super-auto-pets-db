"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.honey = exports.beeSummoned = void 0;
exports.beeSummoned = {
    name: "Bee",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F41D}",
    },
    packs: ["StandardPack", "ExpansionPack1"],
    tier: "Summoned",
    baseAttack: 1,
    baseHealth: 1,
};
exports.honey = {
    name: "Honey",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F36F}",
    },
    tier: 1,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give an animal Honey Bee.",
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
                name: "HoneyBee",
            },
        },
    },
};

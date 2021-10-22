"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.garlic = void 0;
exports.garlic = {
    name: "Garlic",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F9C4}",
    },
    tier: 3,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give an animal Garlic Armor.",
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
                name: "GarlicArmor",
            },
        },
    },
};

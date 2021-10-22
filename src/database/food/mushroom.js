"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mushroom = void 0;
exports.mushroom = {
    name: "Mushroom",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F344}",
    },
    tier: 6,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give an animal Extra Life.",
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
                name: "ExtraLife",
            },
        },
    },
};

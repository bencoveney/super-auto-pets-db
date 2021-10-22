"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.melon = void 0;
exports.melon = {
    name: "Melon",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F348}",
    },
    tier: 6,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give an animal Melon Armor.",
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
                name: "MelonArmor",
            },
        },
    },
};

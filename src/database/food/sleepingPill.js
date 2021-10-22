"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleepingPill = void 0;
exports.sleepingPill = {
    name: "Sleeping Pill",
    image: {
        source: "fxemoji",
        unicodeCodePoint: "\u{1F48A}",
        name: "pill",
    },
    notes: "Only costs 1 gold.",
    tier: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Make a friendly animal faint.",
        triggeredBy: {
            kind: "Self",
        },
        trigger: "Buy" /* Buy */,
        effect: {
            kind: "Faint",
            target: {
                kind: "PurchaseTarget",
            },
        },
    },
};

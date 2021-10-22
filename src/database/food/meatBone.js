"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meatBone = void 0;
exports.meatBone = {
    name: "Meat Bone",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\u{1F356}",
    },
    tier: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    ability: {
        description: "Give an animal Bone Attack.",
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
                name: "BoneAttack",
            },
        },
    },
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gorilla = void 0;
function gorillaAbility(level) {
    return {
        description: "Hurt: Gain Coconut Shield.",
        trigger: "Hurt" /* Hurt */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ApplyStatus",
            status: {
                name: "CoconutShield",
            },
            to: {
                kind: "Self",
            },
        },
    };
}
exports.gorilla = {
    name: "Gorilla",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83E\uDD8D",
    },
    tier: 6,
    baseAttack: 6,
    baseHealth: 6,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: gorillaAbility(1),
    level2Ability: gorillaAbility(2),
    level3Ability: gorillaAbility(3),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.microbe = void 0;
function microbeAbility(level) {
    return {
        description: "Faint: Make all animals Weak.",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ApplyStatus",
            // TODO: Proper status effects.
            status: {
                name: "Weak",
            },
            to: {
                kind: "All",
            },
        },
    };
}
exports.microbe = {
    name: "Microbe",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83E\uDDA0",
    },
    tier: 5,
    baseAttack: 1,
    baseHealth: 1,
    packs: ["ExpansionPack1"],
    level1Ability: microbeAbility(1),
    level2Ability: microbeAbility(2),
    level3Ability: microbeAbility(3),
};

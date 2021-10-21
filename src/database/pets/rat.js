"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rat = void 0;
const dirtyRatSummoned = {
    name: "Dirty Rat",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F400}",
    },
    tier: "Summoned",
    baseAttack: 1,
    baseHealth: 1,
    // TODO: Represent random attacks?
};
function ratAbility(level) {
    return {
        description: `Faint: summon one ${level}/${level} Dirty Rat for the opponent that betrays him.`,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: dirtyRatSummoned,
        },
    };
}
exports.rat = {
    name: "Rat",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F400}",
    },
    tier: 2,
    baseAttack: 4,
    baseHealth: 5,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: ratAbility(1),
    level2Ability: ratAbility(2),
    level3Ability: ratAbility(3),
};

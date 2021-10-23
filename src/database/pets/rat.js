"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rat = exports.dirtyRatSummoned = void 0;
exports.dirtyRatSummoned = {
    name: "Dirty Rat",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F400}",
    },
    packs: ["StandardPack", "ExpansionPack1"],
    tier: "Summoned",
    baseAttack: 1,
    baseHealth: 1,
    // TODO: Represent summoning for enemy?
    // TODO: Represent random attacks?
};
function ratAbility(level) {
    return {
        description: `Faint: summon one 1/1 Dirty Rat for the opponent that betrays him.`,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: exports.dirtyRatSummoned,
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

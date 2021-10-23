"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rooster = exports.chick = void 0;
exports.chick = {
    name: "Chick",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F424}",
    },
    packs: ["StandardPack", "ExpansionPack1"],
    tier: "Summoned",
    baseAttack: "?",
    baseHealth: 1,
};
function roosterAbility(level) {
    return {
        description: `Faint: Summon ${level} Chicks with the same Attack as this.`,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: exports.chick,
            team: "Friendly",
            // TODO: Represent copied attack value.
        },
    };
}
exports.rooster = {
    name: "Rooster",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F413}",
    },
    tier: 4,
    baseAttack: 3,
    baseHealth: 3,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: Object.assign(Object.assign({}, roosterAbility(1)), { description: "Faint: Summon a Chick with the same Attack as this." }),
    level2Ability: roosterAbility(2),
    level3Ability: roosterAbility(3),
};

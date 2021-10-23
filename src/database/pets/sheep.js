"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sheep = exports.ramSummoned = void 0;
exports.ramSummoned = {
    name: "Ram",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F40F}",
    },
    packs: ["StandardPack", "ExpansionPack1"],
    tier: "Summoned",
    baseAttack: "?",
    baseHealth: "?",
};
function sheepAbility(level) {
    return {
        description: `Faint: Summon two ${level * 2}/${level * 2} Rams`,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: Object.assign(Object.assign({}, exports.ramSummoned), { baseAttack: level * 2, baseHealth: level * 2 }),
        },
    };
}
exports.sheep = {
    name: "Sheep",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F411}",
    },
    tier: 3,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: sheepAbility(1),
    level2Ability: sheepAbility(2),
    level3Ability: sheepAbility(3),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cricket = exports.cricketSummoned = void 0;
exports.cricketSummoned = {
    name: "Zombie Cricket",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F997}",
    },
    packs: ["StandardPack", "ExpansionPack1"],
    tier: "Summoned",
    baseAttack: "?",
    baseHealth: "?",
};
function cricketAbility(level) {
    return {
        description: `Faint: Summon a ${level}/${level} Cricket`,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: Object.assign(Object.assign({}, exports.cricketSummoned), { baseAttack: level, baseHealth: level }),
            team: "Friendly",
        },
    };
}
exports.cricket = {
    name: "Cricket",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F997}",
    },
    tier: 1,
    baseAttack: 1,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: cricketAbility(1),
    level2Ability: cricketAbility(2),
    level3Ability: cricketAbility(3),
};

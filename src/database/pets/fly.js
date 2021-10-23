"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fly = exports.flySummoned = void 0;
exports.flySummoned = {
    name: "Zombie Fly",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1FAB0}",
    },
    packs: ["StandardPack"],
    tier: "Summoned",
    baseAttack: "?",
    baseHealth: "?",
};
function flyAbility(level) {
    return {
        description: `Friend faints: Summon a ${level * 2}/${level * 2} fly in its place`,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "SummonPet",
            pet: Object.assign(Object.assign({}, exports.flySummoned), { baseAttack: level * 2, baseHealth: level * 2 }),
            team: "Friendly",
        },
    };
}
exports.fly = {
    name: "Fly",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1FAB0}",
    },
    tier: 6,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack"],
    level1Ability: flyAbility(1),
    level2Ability: flyAbility(2),
    level3Ability: flyAbility(3),
};

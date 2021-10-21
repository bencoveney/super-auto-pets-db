"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deer = void 0;
const busSummoned = {
    name: "Bus",
    image: {
        source: "noto-emoji",
        // TODO: Incorrect. Not sure where the right bus should come from
        unicodeCodePoint: "\u{1F68D}",
    },
    tier: "Summoned",
    baseAttack: -1,
    baseHealth: -1,
    // TODO: Represent Splash Attack
};
function deerAbility(level) {
    return {
        description: `Faint: Summon a ${level * 5}/${level * 5} Bus with Splash Attack`,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: Object.assign(Object.assign({}, busSummoned), { baseAttack: level * 5, baseHealth: level * 5 }),
        },
    };
}
exports.deer = {
    name: "Deer",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F98C}",
    },
    tier: 4,
    baseAttack: 1,
    baseHealth: 1,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: deerAbility(1),
    level2Ability: deerAbility(2),
    level3Ability: deerAbility(3),
};

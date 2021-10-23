"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eagle = void 0;
function eagleAbility(level) {
    return {
        description: `Faint: Summon one Lvl. ${level} tier 6 animal.`,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonRandomPet",
            tier: 6,
            // TODO: What are the stats?
            level: level,
        },
    };
}
exports.eagle = {
    name: "Eagle",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F985}",
    },
    tier: 5,
    baseAttack: 6,
    baseHealth: 5,
    packs: ["ExpansionPack1"],
    level1Ability: eagleAbility(1),
    level2Ability: eagleAbility(2),
    level3Ability: eagleAbility(3),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swan = void 0;
function swanAbility(level) {
    return {
        description: "Start of turn: Gain " + level + " gold.",
        trigger: "StartOfTurn" /* StartOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "GainGold",
            amount: level,
        },
    };
}
exports.swan = {
    name: "Swan",
    unicodeCodePoint: "\uD83E\uDDA2",
    tier: 2,
    baseAttack: 3,
    baseHealth: 4,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: swanAbility(1),
    level2Ability: swanAbility(2),
    level3Ability: swanAbility(3),
};

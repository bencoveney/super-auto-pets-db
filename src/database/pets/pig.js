"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pig = void 0;
function pigAbility(level) {
    return {
        description: "Sell: Gain an extra " + level + " gold",
        trigger: "Sell" /* Sell */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "GainGold",
            amount: level,
        },
    };
}
exports.pig = {
    name: "Pig",
    unicodeCodePoint: "\uD83D\uDC16",
    tier: 1,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: pigAbility(1),
    level2Ability: pigAbility(2),
    level3Ability: pigAbility(3),
};

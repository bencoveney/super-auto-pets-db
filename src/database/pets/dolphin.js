"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dolphin = void 0;
function dolphinAbility(level) {
    return {
        description: "Start of battle: Deal " + level * 5 + " damage to the lowest health enemy",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "None",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "LowestHealthEnemy",
            },
            amount: level * 5,
        },
    };
}
exports.dolphin = {
    name: "Dolphin",
    unicodeCodePoint: "\uD83D\uDC2C",
    tier: 4,
    baseAttack: 4,
    baseHealth: 6,
    packs: ["StandardPack"],
    level1Ability: dolphinAbility(1),
    level2Ability: dolphinAbility(2),
    level3Ability: dolphinAbility(3),
};

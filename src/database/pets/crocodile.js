"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crocodile = void 0;
function crocodileAbility(level) {
    return {
        description: "Start of battle: Deal " + level * 7 + " damage to the last enemy",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "None",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "LowestHealthEnemy",
            },
            amount: level * 7,
        },
    };
}
exports.crocodile = {
    name: "Crocodile",
    tier: 5,
    baseAttack: 6,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: crocodileAbility(1),
    level2Ability: crocodileAbility(2),
    level3Ability: crocodileAbility(3),
};

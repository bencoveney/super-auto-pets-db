"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mosquito = void 0;
function mosquitoAbility(level) {
    return {
        description: "Start of battle: Deal " + level + " damage to a random enemy",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "None",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "RandomEnemy",
                n: 1,
            },
            amount: level,
        },
    };
}
exports.mosquito = {
    name: "Mosquito",
    tier: 1,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: mosquitoAbility(1),
    level2Ability: mosquitoAbility(2),
    level3Ability: mosquitoAbility(3),
};

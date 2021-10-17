"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beetle = void 0;
function beetleAbility(level) {
    return {
        description: "Eat shop food: Give shop animals +" + level + " health",
        trigger: "EatsShopFood" /* EatsShopFood */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            healthAmount: level,
            target: {
                kind: "EachShopAnimal",
            },
            untilEndOfBattle: false,
        },
    };
}
exports.beetle = {
    name: "Beetle",
    tier: 1,
    baseAttack: 2,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: beetleAbility(1),
    level2Ability: beetleAbility(2),
    level3Ability: beetleAbility(3),
};

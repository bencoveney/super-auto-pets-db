"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duck = void 0;
function duckAbility(level) {
    return {
        description: "Sell: Give shop animals +" + level + "/+" + level,
        trigger: "Sell" /* Sell */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "EachShopAnimal",
            },
            attackAmount: level,
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.duck = {
    name: "Duck",
    tier: 1,
    baseAttack: 1,
    baseHealth: 2,
    packs: ["StandardPack"],
    level1Ability: duckAbility(1),
    level2Ability: duckAbility(2),
    level3Ability: duckAbility(3),
};

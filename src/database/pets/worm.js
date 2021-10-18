"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.worm = void 0;
function wormAbility(level) {
    return {
        description: "Eats shop food: Gain +" + level + "/+" + level,
        trigger: "EatsShopFood" /* EatsShopFood */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            attackAmount: level,
            healthAmount: level,
            target: {
                kind: "Self",
            },
            untilEndOfBattle: false,
        },
    };
}
exports.worm = {
    name: "Worm",
    unicodeCodePoint: "\uD83E\uDEB1",
    tier: 4,
    baseAttack: 1,
    baseHealth: 1,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: wormAbility(1),
    level2Ability: wormAbility(2),
    level3Ability: wormAbility(3),
};

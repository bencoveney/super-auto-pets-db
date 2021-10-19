"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seal = void 0;
function sealAbility(level) {
    return {
        description: "Eats shop food: Give 2 random friends +" + level + "/+" + level + ".",
        trigger: "EatsShopFood" /* EatsShopFood */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "RandomFriend",
                n: 2,
            },
            attackAmount: level,
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.seal = {
    name: "Seal",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83E\uDDAD",
    },
    tier: 5,
    baseAttack: 3,
    baseHealth: 6,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: sealAbility(1),
    level2Ability: sealAbility(2),
    level3Ability: sealAbility(3),
};

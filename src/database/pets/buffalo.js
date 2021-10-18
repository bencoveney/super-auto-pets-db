"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buffalo = void 0;
function buffaloAbility(level) {
    return {
        description: "Friend bought: Gain +" + level + "/+" + level,
        trigger: "Buy" /* Buy */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "Self",
            },
            attackAmount: level,
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.buffalo = {
    name: "Buffalo",
    unicodeCodePoint: "\uD83D\uDC03",
    tier: 4,
    baseAttack: 5,
    baseHealth: 5,
    packs: ["ExpansionPack1"],
    level1Ability: buffaloAbility(1),
    level2Ability: buffaloAbility(2),
    level3Ability: buffaloAbility(3),
};

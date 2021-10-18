"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snail = void 0;
function snailAbility(level) {
    return {
        description: "Buy: If you lost last battle, give all friends +" + level * 2 + "/+" + level,
        trigger: "BuyAfterLoss" /* BuyAfterLoss */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "EachFriend",
            },
            attackAmount: level * 2,
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.snail = {
    name: "Snail",
    unicodeCodePoint: "\uD83D\uDC0C",
    tier: 3,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: snailAbility(1),
    level2Ability: snailAbility(2),
    level3Ability: snailAbility(3),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beaver = void 0;
function beaverAbility(level) {
    return {
        description: "Sell: Give two random friends +" + level + " health",
        trigger: "Sell" /* Sell */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            healthAmount: level,
            target: {
                kind: "RandomFriend",
                n: 2,
            },
            untilEndOfBattle: false,
        },
    };
}
exports.beaver = {
    name: "Beaver",
    unicodeCodePoint: "\uD83E\uDDAB",
    tier: 1,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: beaverAbility(1),
    level2Ability: beaverAbility(2),
    level3Ability: beaverAbility(3),
};

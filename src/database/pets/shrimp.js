"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shrimp = void 0;
function shrimpAbility(level) {
    return {
        description: "Friend sold: Give a random friend +" + level + " Health.",
        trigger: "Sell" /* Sell */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "RandomFriend",
                n: 1,
            },
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.shrimp = {
    name: "Shrimp",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83E\uDD90",
    },
    tier: 2,
    baseAttack: 2,
    baseHealth: 1,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: shrimpAbility(1),
    level2Ability: shrimpAbility(2),
    level3Ability: shrimpAbility(3),
};

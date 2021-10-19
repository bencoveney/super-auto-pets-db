"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monkey = void 0;
function monkeyAbility(level) {
    return {
        description: "End turn: Give right-most friend +" + level * 2 + "/+" + level * 2,
        trigger: "EndOfTurn" /* EndOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "RightMostFriend",
            },
            attackAmount: level * 2,
            healthAmount: level * 2,
            untilEndOfBattle: false,
        },
    };
}
exports.monkey = {
    name: "Monkey",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83D\uDC12",
    },
    tier: 4,
    baseAttack: 3,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: monkeyAbility(1),
    level2Ability: monkeyAbility(2),
    level3Ability: monkeyAbility(3),
};

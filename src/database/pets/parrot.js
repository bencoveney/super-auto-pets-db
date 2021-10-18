"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parrot = void 0;
function parrotAbility(level) {
    return {
        description: "End Turn: Copy the Lvl. " + level + " ability from animal ahead.",
        trigger: "EndOfTurn" /* EndOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "TransferAbility",
            from: {
                kind: "FriendAhead",
                n: level,
            },
            to: {
                kind: "Self",
            },
            level: level,
        },
    };
}
exports.parrot = {
    name: "Parrot",
    unicodeCodePoint: "\uD83E\uDD9C",
    tier: 5,
    baseAttack: 3,
    baseHealth: 2,
    packs: ["StandardPack"],
    level1Ability: parrotAbility(1),
    level2Ability: parrotAbility(2),
    level3Ability: parrotAbility(3),
};

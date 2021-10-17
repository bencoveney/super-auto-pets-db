"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crab = void 0;
function crabAbility(level) {
    return {
        description: "Start of battle: Copy Health from friend ahead.",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "TransferStats",
            copyAttack: false,
            copyHealth: true,
            from: {
                kind: "FriendAhead",
                n: 1,
            },
            to: {
                kind: "Self",
            },
        },
    };
}
exports.crab = {
    name: "Crab",
    tier: 2,
    baseAttack: 3,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: crabAbility(1),
    level2Ability: crabAbility(2),
    level3Ability: crabAbility(3),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elephant = void 0;
function elephantAbility(level) {
    return {
        description: "Before Attack: Deal 1 damage to " + level + " friends behind.",
        trigger: "BeforeAttack" /* BeforeAttack */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "FriendBehind",
                n: level,
            },
            amount: 1,
        },
    };
}
exports.elephant = {
    name: "Elephant",
    unicodeCodePoint: "\uD83D\uDC18",
    tier: 2,
    baseAttack: 3,
    baseHealth: 5,
    packs: ["StandardPack"],
    level1Ability: elephantAbility(1),
    level2Ability: elephantAbility(2),
    level3Ability: elephantAbility(3),
};

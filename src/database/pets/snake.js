"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snake = void 0;
function snakeAbility(level) {
    return {
        description: "Friend ahead attacks: Deal " + level * 5 + " damage to a random enemy.",
        trigger: "AfterAttack" /* AfterAttack */,
        triggeredBy: {
            kind: "FriendAhead",
            n: 1,
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "RandomEnemy",
                n: 1,
            },
            amount: level * 5,
        },
    };
}
exports.snake = {
    name: "Snake",
    tier: 6,
    baseAttack: 6,
    baseHealth: 6,
    packs: ["StandardPack"],
    level1Ability: snakeAbility(1),
    level2Ability: snakeAbility(2),
    level3Ability: snakeAbility(3),
};

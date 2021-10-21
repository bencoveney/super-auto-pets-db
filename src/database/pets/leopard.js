"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leopard = void 0;
function leopardAbility(level) {
    return {
        description: `Start of battle: Deal 50% Attack damage to ${level} random enemies.`,
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "RandomEnemy",
                n: level,
            },
            amount: { attackDamagePercent: 50 },
        },
    };
}
exports.leopard = {
    name: "Leopard",
    image: {
        source: "fxemoji",
        name: "leopardside",
        unicodeCodePoint: "\u{1F406}",
    },
    tier: 6,
    baseAttack: 6,
    baseHealth: 4,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: Object.assign(Object.assign({}, leopardAbility(1)), { description: `Start of battle: Deal 50% Attack damage to a random enemy.` }),
    level2Ability: leopardAbility(2),
    level3Ability: leopardAbility(3),
};

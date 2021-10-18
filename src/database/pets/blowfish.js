"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blowfish = void 0;
function blowfishAbility(level) {
    return {
        description: "Hurt: Deal " + level * 2 + " damage to a random enemy.",
        trigger: "Hurt" /* Hurt */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "RandomEnemy",
                n: 1,
            },
            amount: level * 2,
        },
    };
}
exports.blowfish = {
    name: "Blowfish",
    unicodeCodePoint: "\uD83D\uDC21",
    tier: 3,
    baseAttack: 3,
    baseHealth: 5,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: blowfishAbility(1),
    level2Ability: blowfishAbility(2),
    level3Ability: blowfishAbility(3),
};

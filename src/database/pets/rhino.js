"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rhino = void 0;
function rhinoAbility(level) {
    return {
        description: "Knock out: Deal " + level * 4 + " damage to the first enemy.",
        trigger: "KnockOut" /* KnockOut */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "FirstEnemy",
            },
            amount: level * 4,
        },
    };
}
exports.rhino = {
    name: "Rhino",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83E\uDD8F",
    },
    tier: 5,
    baseAttack: 5,
    baseHealth: 6,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: rhinoAbility(1),
    level2Ability: rhinoAbility(2),
    level3Ability: rhinoAbility(3),
};

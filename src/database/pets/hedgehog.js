"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hedgehog = void 0;
function hedgehogAbility(level) {
    return {
        description: "Faint: Deal " + level * 2 + " damage to all.",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "All",
            },
            amount: level * 2,
        },
    };
}
exports.hedgehog = {
    name: "Hedgehog",
    unicodeCodePoint: "\uD83E\uDD94",
    tier: 2,
    baseAttack: 3,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: hedgehogAbility(1),
    level2Ability: hedgehogAbility(2),
    level3Ability: hedgehogAbility(3),
};

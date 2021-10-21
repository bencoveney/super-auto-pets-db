"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ladybug = void 0;
function ladybugAbility(level) {
    return {
        description: `Buy food: Gain +${level}/+${level} until end of battle`,
        trigger: "BuyFood" /* BuyFood */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            attackAmount: level,
            healthAmount: level,
            target: {
                kind: "Self",
            },
            untilEndOfBattle: true,
        },
    };
}
exports.ladybug = {
    name: "Ladybug",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F41E}",
    },
    tier: 1,
    baseAttack: 1,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: ladybugAbility(1),
    level2Ability: ladybugAbility(2),
    level3Ability: ladybugAbility(3),
};

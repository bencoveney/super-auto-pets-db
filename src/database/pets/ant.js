"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ant = void 0;
function antAbility(level) {
    return {
        description: `Faint: Give a random friend +${level * 2}/+${level}`,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            attackAmount: level * 2,
            healthAmount: level,
            target: {
                kind: "RandomFriend",
                n: 1,
            },
            untilEndOfBattle: false,
        },
    };
}
exports.ant = {
    name: "Ant",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F41C}",
    },
    tier: 1,
    baseAttack: 2,
    baseHealth: 1,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: antAbility(1),
    level2Ability: antAbility(2),
    level3Ability: antAbility(3),
};

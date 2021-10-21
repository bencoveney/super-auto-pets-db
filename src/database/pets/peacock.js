"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peacock = void 0;
function peacockAbility(level) {
    return {
        description: `Hurt: Gain ${level * 2} Attack.`,
        trigger: "Hurt" /* Hurt */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "Self",
            },
            attackAmount: level * 2,
            untilEndOfBattle: false,
        },
    };
}
exports.peacock = {
    name: "Peacock",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F99A}",
    },
    tier: 2,
    baseAttack: 3,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: peacockAbility(1),
    level2Ability: peacockAbility(2),
    level3Ability: peacockAbility(3),
};

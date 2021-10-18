"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mammoth = void 0;
function mammothAbility(level) {
    return {
        description: "Faint: Give all friends +" + level * 2 + "/+" + level * 2,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            attackAmount: level * 2,
            healthAmount: level * 2,
            target: {
                kind: "EachFriend",
            },
            untilEndOfBattle: false,
        },
    };
}
exports.mammoth = {
    name: "Mammoth",
    unicodeCodePoint: "\uD83E\uDDA3",
    tier: 6,
    baseAttack: 2,
    baseHealth: 6,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: mammothAbility(1),
    level2Ability: mammothAbility(2),
    level3Ability: mammothAbility(3),
};

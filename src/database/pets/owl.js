"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.owl = void 0;
function owlAbility(level) {
    return {
        description: `Sell: Give a random friend +2/+2`,
        trigger: "Sell" /* Sell */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "RandomFriend",
                n: 1,
            },
            attackAmount: 2,
            healthAmount: 2,
            untilEndOfBattle: false,
        },
    };
}
exports.owl = {
    name: "Owl",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F989}",
    },
    tier: 3,
    baseAttack: 5,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: owlAbility(1),
    level2Ability: owlAbility(2),
    level3Ability: owlAbility(3),
};

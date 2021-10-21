"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camel = void 0;
function camelAbility(level) {
    return {
        description: `Hurt: Give friend behind +${level}/+${level * 2}`,
        trigger: "Hurt" /* Hurt */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "FriendBehind",
                n: 1,
            },
            attackAmount: level,
            healthAmount: level * 2,
            untilEndOfBattle: false,
        },
    };
}
exports.camel = {
    name: "Camel",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F42B}",
    },
    tier: 3,
    baseAttack: 2,
    baseHealth: 5,
    packs: ["StandardPack"],
    level1Ability: camelAbility(1),
    level2Ability: camelAbility(2),
    level3Ability: camelAbility(3),
};

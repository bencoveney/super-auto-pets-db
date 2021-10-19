"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabbyCat = void 0;
function tabbyCatAbility(level) {
    return {
        description: "Eats shop food: Give friends +" + level + " Attack until end of battle",
        trigger: "EatsShopFood" /* EatsShopFood */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "EachFriend",
            },
            attackAmount: level,
            untilEndOfBattle: true,
        },
    };
}
exports.tabbyCat = {
    name: "Tabby Cat",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83D\uDC08",
    },
    tier: 2,
    baseAttack: 4,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: tabbyCatAbility(1),
    level2Ability: tabbyCatAbility(2),
    level3Ability: tabbyCatAbility(3),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cat = void 0;
function catAbility(level) {
    var multiplier = "";
    switch (level) {
        case 1:
            multiplier = "doubled";
            break;
        case 2:
            multiplier = "tripled";
            break;
        case 3:
            multiplier = "quadrupled";
            break;
    }
    return {
        description: "Food with Health and Attack effects are " + multiplier + ".",
        trigger: "Hurt" /* Hurt */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "FoodMultiplier",
            amount: level + 1,
        },
    };
}
exports.cat = {
    name: "Cat",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83D\uDC08\u200D\u2B1B",
    },
    tier: 6,
    baseAttack: 4,
    baseHealth: 5,
    packs: ["StandardPack"],
    level1Ability: catAbility(1),
    level2Ability: catAbility(2),
    level3Ability: catAbility(3),
};

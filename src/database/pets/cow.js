"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cow = void 0;
function cowAbility(level) {
    return {
        description: `Buy: Replace food shop with 2 free milk that gives +2/+2.`,
        trigger: "Buy" /* Buy */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "RefillShops",
            shop: "Food",
            food: "Milk",
        },
    };
}
exports.cow = {
    name: "Cow",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F404}",
    },
    tier: 5,
    baseAttack: 4,
    baseHealth: 6,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: cowAbility(1),
    level2Ability: cowAbility(2),
    level3Ability: cowAbility(3),
};

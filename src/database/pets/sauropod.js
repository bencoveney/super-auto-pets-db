"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sauropod = void 0;
function sauropodAbility(level) {
    return {
        description: `Buy food: Gain 1 gold.`,
        trigger: "BuyFood" /* BuyFood */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "GainGold",
            amount: 1,
        },
    };
}
exports.sauropod = {
    name: "Sauropod",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F995}",
    },
    tier: 6,
    baseAttack: 4,
    baseHealth: 12,
    packs: ["ExpansionPack1"],
    level1Ability: sauropodAbility(1),
    level2Ability: sauropodAbility(2),
    level3Ability: sauropodAbility(3),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goat = void 0;
function goatAbility(level) {
    return {
        description: `Friend bought: Gain 1 gold.`,
        trigger: "Buy" /* Buy */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "GainGold",
            amount: 1,
        },
    };
}
exports.goat = {
    name: "Goat",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F410}",
    },
    tier: 5,
    baseAttack: 4,
    baseHealth: 5,
    packs: ["ExpansionPack1"],
    level1Ability: goatAbility(1),
    level2Ability: goatAbility(2),
    level3Ability: goatAbility(3),
};

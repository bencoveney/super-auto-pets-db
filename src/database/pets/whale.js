"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whale = void 0;
function whaleAbility(level) {
    return {
        description: "Start of battle: Swallow friend ahead and release it as a level " + level + " after fainting.",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            // TODO: This should probably be represented as 2 abilities, but I would need 2 triggers.
            kind: "Swallow",
            target: {
                kind: "FriendAhead",
                n: 1,
            },
        },
    };
}
exports.whale = {
    name: "Whale",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83D\uDC0B",
    },
    tier: 3,
    baseAttack: 2,
    baseHealth: 6,
    packs: ["StandardPack"],
    level1Ability: whaleAbility(1),
    level2Ability: whaleAbility(2),
    level3Ability: whaleAbility(3),
};

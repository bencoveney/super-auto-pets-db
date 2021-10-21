"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dodo = void 0;
function dodoAbility(level) {
    return {
        description: `Start of battle: Give Attack to ${level} friends ahead.`,
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "TransferStats",
            copyAttack: true,
            copyHealth: false,
            from: {
                kind: "Self",
            },
            to: {
                kind: "FriendAhead",
                n: level,
            },
        },
    };
}
exports.dodo = {
    name: "Dodo",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F9A4}",
    },
    tier: 2,
    baseAttack: 1,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: Object.assign(Object.assign({}, dodoAbility(1)), { description: `Start of battle: Give Attack to friend ahead.` }),
    level2Ability: dodoAbility(2),
    level3Ability: dodoAbility(3),
};

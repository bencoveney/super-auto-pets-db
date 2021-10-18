"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kangaroo = void 0;
function kangarooAbility(level) {
    return {
        description: "Friend ahead attacks: Gain +" + level * 2 + "/+" + level * 2,
        trigger: "AfterAttack" /* AfterAttack */,
        triggeredBy: {
            kind: "FriendAhead",
            n: 1,
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "Self",
            },
            attackAmount: level * 2,
            healthAmount: level * 2,
            untilEndOfBattle: false,
        },
    };
}
exports.kangaroo = {
    name: "Kangaroo",
    unicodeCodePoint: "\uD83E\uDD98",
    tier: 3,
    baseAttack: 2,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: kangarooAbility(1),
    level2Ability: kangarooAbility(2),
    level3Ability: kangarooAbility(3),
};

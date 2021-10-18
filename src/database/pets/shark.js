"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shark = void 0;
function sharkAbility(level) {
    return {
        description: "Friend faints: Gain +" + level * 2 + "/+" + level + ".",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "Self",
            },
            attackAmount: level * 2,
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.shark = {
    name: "Shark",
    unicodeCodePoint: "\uD83E\uDD88",
    tier: 5,
    baseAttack: 4,
    baseHealth: 4,
    packs: ["StandardPack"],
    level1Ability: sharkAbility(1),
    level2Ability: sharkAbility(2),
    level3Ability: sharkAbility(3),
};

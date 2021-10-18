"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turkey = void 0;
function turkeyAbility(level) {
    return {
        description: "Friend summoned: Give it +" + level * 3 + "/+" + level * 3 + ".",
        trigger: "Summoned" /* Summoned */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "TriggeringEntity",
            },
            attackAmount: level * 3,
            healthAmount: level * 3,
            untilEndOfBattle: false,
        },
    };
}
exports.turkey = {
    name: "Turkey",
    unicodeCodePoint: "\uD83E\uDD83",
    tier: 5,
    baseAttack: 3,
    baseHealth: 4,
    packs: ["StandardPack"],
    level1Ability: turkeyAbility(1),
    level2Ability: turkeyAbility(2),
    level3Ability: turkeyAbility(3),
};

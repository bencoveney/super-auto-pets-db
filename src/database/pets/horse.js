"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.horse = void 0;
function horseAbility(level) {
    return {
        description: "Friend summoned: Give it +" + level + " Attack until end of battle",
        trigger: "Summoned" /* Summoned */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "TriggeringEntity",
            },
            attackAmount: level,
            untilEndOfBattle: true,
        },
    };
}
exports.horse = {
    name: "Horse",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83D\uDC0E",
    },
    tier: 1,
    baseAttack: 1,
    baseHealth: 1,
    packs: ["StandardPack"],
    level1Ability: horseAbility(1),
    level2Ability: horseAbility(2),
    level3Ability: horseAbility(3),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lobster = void 0;
function lobsterAbility(level) {
    return {
        description: "Friend summoned: Give it +" + level * 2 + "/+" + level * 2 + " when not in battle.",
        trigger: "Summoned" /* Summoned */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "TriggeringEntity",
            },
            attackAmount: level * 2,
            healthAmount: level * 2,
            untilEndOfBattle: false,
        },
    };
}
exports.lobster = {
    name: "Lobster",
    image: {
        source: "twemoji",
        unicodeCodePoint: "\uD83E\uDD9E",
    },
    tier: 4,
    baseAttack: 3,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: lobsterAbility(1),
    level2Ability: lobsterAbility(2),
    level3Ability: lobsterAbility(3),
};

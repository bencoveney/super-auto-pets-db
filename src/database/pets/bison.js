"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bison = void 0;
function bisonAbility(level) {
    return {
        description: "End turn: Gain +" + level * 2 + "/+" + level * 2 + " if there is at least one Lvl. 3 friend.",
        trigger: "EndOfTurnWithLvl3Friend" /* EndOfTurnWithLvl3Friend */,
        triggeredBy: {
            kind: "Self",
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
exports.bison = {
    name: "Bison",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83E\uDDAC",
    },
    tier: 4,
    baseAttack: 6,
    baseHealth: 6,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: bisonAbility(1),
    level2Ability: bisonAbility(2),
    level3Ability: bisonAbility(3),
};

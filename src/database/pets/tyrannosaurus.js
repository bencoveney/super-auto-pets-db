"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tyrannosaurus = void 0;
function tyrannosaurusAbility(level) {
    return {
        description: "End turn: If you have 3 or more gold, give other friends +" + level * 2 + "/+" + level * 2,
        trigger: "EndOfTurnWith3PlusGold" /* EndOfTurnWith3PlusGold */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "EachFriend",
            },
            attackAmount: level * 2,
            healthAmount: level * 2,
            untilEndOfBattle: false,
        },
    };
}
exports.tyrannosaurus = {
    name: "Tyrannosaurus",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83E\uDD96",
    },
    tier: 6,
    baseAttack: 9,
    baseHealth: 4,
    packs: ["ExpansionPack1"],
    level1Ability: tyrannosaurusAbility(1),
    level2Ability: tyrannosaurusAbility(2),
    level3Ability: tyrannosaurusAbility(3),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fish = void 0;
function fishAbility(level) {
    return {
        description: "Level-up: Give all friends +" + level + "/+" + level,
        trigger: "LevelUp" /* LevelUp */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "EachFriend",
            },
            attackAmount: level,
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.fish = {
    name: "Fish",
    // TODO: Incorrect. Use Mozilla fish.
    unicodeCodePoint: "\uD83D\uDC1F",
    tier: 1,
    baseAttack: 2,
    baseHealth: 3,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: fishAbility(1),
    level2Ability: fishAbility(2),
};

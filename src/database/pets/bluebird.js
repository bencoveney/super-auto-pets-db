"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bluebird = void 0;
function bluebirdAbility(level) {
    return {
        description: "End turn: Give left-most friend +" + level + " attack",
        trigger: "EndOfTurn" /* EndOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            attackAmount: level,
            target: {
                kind: "LeftMostFriend",
            },
            untilEndOfBattle: false,
        },
    };
}
exports.bluebird = {
    name: "Bluebird",
    tier: 1,
    baseAttack: 2,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: bluebirdAbility(1),
    level2Ability: bluebirdAbility(2),
    level3Ability: bluebirdAbility(3),
};

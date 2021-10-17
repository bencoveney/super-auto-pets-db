"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hatchingChick = void 0;
function hatchingChickAbility(level) {
    if (level <= 1) {
        return {
            description: "End turn: Give +5/+5 to friend ahead until end of battle.",
            trigger: "EndOfTurn" /* EndOfTurn */,
            triggeredBy: {
                kind: "Self",
            },
            effect: {
                kind: "ModifyStats",
                target: {
                    kind: "FriendAhead",
                    n: 1,
                },
                attackAmount: 5,
                healthAmount: 5,
                untilEndOfBattle: true,
            },
        };
    }
    if (level <= 2) {
        return {
            description: "End turn: Give +2/+2 to friend ahead.",
            trigger: "EndOfTurn" /* EndOfTurn */,
            triggeredBy: {
                kind: "Self",
            },
            effect: {
                kind: "ModifyStats",
                target: {
                    kind: "FriendAhead",
                    n: 1,
                },
                attackAmount: 2,
                healthAmount: 2,
                untilEndOfBattle: false,
            },
        };
    }
    return {
        description: "Start of turn: Give +1 Experience to friend ahead",
        trigger: "StartOfTurn" /* StartOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "GainExperience",
            target: {
                kind: "FriendAhead",
                n: 1,
            },
            amount: 1,
        },
    };
}
exports.hatchingChick = {
    name: "Hatching Chick",
    tier: 3,
    baseAttack: 1,
    baseHealth: 1,
    packs: ["ExpansionPack1"],
    level1Ability: hatchingChickAbility(1),
    level2Ability: hatchingChickAbility(2),
    level3Ability: hatchingChickAbility(3),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tropicalFish = void 0;
function tropicalFishAbility(level) {
    return {
        description: "End turn: Give adjacent friends +" + level + " Health",
        trigger: "EndOfTurn" /* EndOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "AdjacentFriends",
            },
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.tropicalFish = {
    name: "Tropical Fish",
    unicodeCodePoint: "\uD83D\uDC20",
    tier: 3,
    baseAttack: 2,
    baseHealth: 4,
    packs: ["ExpansionPack1"],
    level1Ability: tropicalFishAbility(1),
    level2Ability: tropicalFishAbility(2),
    level3Ability: tropicalFishAbility(3),
};

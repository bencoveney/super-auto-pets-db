"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dog = void 0;
function dogAbility(level) {
    return {
        description: "Friend summoned: Gain +" + level + " Attack or +" + level + " Health.",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "OneOf",
            effects: [
                {
                    kind: "ModifyStats",
                    untilEndOfBattle: false,
                    target: {
                        kind: "Self",
                    },
                    attackAmount: level,
                },
                {
                    kind: "ModifyStats",
                    untilEndOfBattle: false,
                    target: {
                        kind: "Self",
                    },
                    healthAmount: level,
                },
            ],
        },
    };
}
exports.dog = {
    name: "Dog",
    // TODO: Incorrect. Use twitter dog here.
    unicodeCodePoint: "\uD83E\uDDAE",
    tier: 2,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: dogAbility(1),
    level2Ability: dogAbility(2),
    level3Ability: dogAbility(3),
};

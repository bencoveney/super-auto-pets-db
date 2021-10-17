"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llama = void 0;
function llamaAbility(level) {
    return {
        // Fewer???
        description: "End turn: If you have 4 or less animals, gain +" + level * 2 + "/+" + level * 2 + ".",
        trigger: "EndOfTurnWith4OrLessAnimals" /* EndOfTurnWith4OrLessAnimals */,
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
exports.llama = {
    name: "Llama",
    tier: 4,
    baseAttack: 2,
    baseHealth: 5,
    packs: ["ExpansionPack1"],
    level1Ability: llamaAbility(1),
    level2Ability: llamaAbility(2),
    level3Ability: llamaAbility(3),
};

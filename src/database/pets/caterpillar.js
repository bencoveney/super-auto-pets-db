"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caterpillar = void 0;
function caterpillarAbility(level) {
    if (level <= 2) {
        return {
            description: "Start of turn: Gain 1 Experience",
            trigger: "StartOfTurn" /* StartOfTurn */,
            triggeredBy: {
                kind: "Self",
            },
            effect: {
                kind: "GainExperience",
                target: {
                    kind: "Self",
                },
                amount: 1,
            },
        };
    }
    return {
        description: "Start of battle: Evolve into a Butterfly",
        trigger: "StartOfTurn" /* StartOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "Evolve",
        },
    };
}
exports.caterpillar = {
    name: "Caterpillar",
    tier: 3,
    baseAttack: 1,
    baseHealth: 4,
    packs: ["ExpansionPack1"],
    level1Ability: caterpillarAbility(1),
    level2Ability: caterpillarAbility(2),
    level3Ability: caterpillarAbility(3),
};

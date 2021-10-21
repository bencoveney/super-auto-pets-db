"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poodle = void 0;
function poodleAbility(level) {
    return {
        description: `End turn: Give +${level}/+${level} to different tier animals.`,
        trigger: "EndOfTurn" /* EndOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "DifferentTierAnimals",
            },
            attackAmount: level,
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.poodle = {
    name: "Poodle",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F429}",
    },
    tier: 4,
    baseAttack: 4,
    baseHealth: 2,
    packs: ["ExpansionPack1"],
    level1Ability: poodleAbility(1),
    level2Ability: poodleAbility(2),
    level3Ability: poodleAbility(3),
};

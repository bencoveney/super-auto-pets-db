"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bat = void 0;
function batAbility(level) {
    return {
        description: `Start of battle: Make ${level} enemies Weak.`,
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ApplyStatus",
            // TODO: Proper status effects.
            status: {
                name: "Weak",
            },
            to: {
                kind: "RandomEnemy",
                n: level,
            },
        },
    };
}
exports.bat = {
    name: "Bat",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F987}",
    },
    tier: 2,
    baseAttack: 1,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: Object.assign(Object.assign({}, batAbility(1)), { description: "Start of battle: Make 1 enemy Weak." }),
    level2Ability: batAbility(2),
    level3Ability: batAbility(3),
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turtle = void 0;
function turtleAbility(level) {
    return {
        description: `Faint: Give ${level} friends behind Melon Armor`,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ApplyStatus",
            status: {
                name: "MelonArmor",
            },
            to: {
                kind: "FriendBehind",
                n: level,
            },
        },
    };
}
exports.turtle = {
    name: "Turtle",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F422}",
    },
    tier: 3,
    baseAttack: 2,
    baseHealth: 4,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: Object.assign(Object.assign({}, turtleAbility(1)), { description: "Faint: Give friend behind Melon Armor" }),
    level2Ability: turtleAbility(2),
    level3Ability: turtleAbility(3),
};

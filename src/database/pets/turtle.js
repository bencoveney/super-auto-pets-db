"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.turtle = void 0;
function turtleAbility(level) {
    return {
        description: "Faint: Give " + level + " friends behind Melon Armor",
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
        unicodeCodePoint: "\uD83D\uDC22",
    },
    tier: 3,
    baseAttack: 2,
    baseHealth: 4,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: __assign(__assign({}, turtleAbility(1)), { description: "Faint: Give friend behind Melon Armor" }),
    level2Ability: turtleAbility(2),
    level3Ability: turtleAbility(3),
};

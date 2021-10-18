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
exports.deer = void 0;
var busSummoned = {
    name: "Bus",
    // TODO: Incorrect.
    unicodeCodePoint: "\uD83D\uDE8D",
    tier: "Summoned",
    baseAttack: -1,
    baseHealth: -1,
    // TODO: Represent Splash Attack
};
function deerAbility(level) {
    return {
        description: "Faint: Summon a " + level * 5 + "/" + level * 5 + " Bus with Splash Attack",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: __assign(__assign({}, busSummoned), { baseAttack: level * 5, baseHealth: level * 5 }),
        },
    };
}
exports.deer = {
    name: "Deer",
    unicodeCodePoint: "\uD83E\uDD8C",
    tier: 4,
    baseAttack: 1,
    baseHealth: 1,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: deerAbility(1),
    level2Ability: deerAbility(2),
    level3Ability: deerAbility(3),
};

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
exports.bat = void 0;
function batAbility(level) {
    return {
        description: "Start of battle: Make " + level + " enemies Weak.",
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
    tier: 2,
    baseAttack: 1,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: __assign(__assign({}, batAbility(1)), { description: "Start of battle: Make 1 enemy Weak." }),
    level2Ability: batAbility(2),
    level3Ability: batAbility(3),
};

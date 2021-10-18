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
exports.sheep = void 0;
var ramSummoned = {
    name: "Ram",
    unicodeCodePoint: "\uD83D\uDC0F",
    tier: "Summoned",
    baseAttack: -1,
    baseHealth: -1,
};
function sheepAbility(level) {
    return {
        description: "Faint: Summon two " + level * 2 + "/" + level * 2 + " Rams",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: __assign(__assign({}, ramSummoned), { baseAttack: level * 2, baseHealth: level * 2 }),
        },
    };
}
exports.sheep = {
    name: "Sheep",
    unicodeCodePoint: "\uD83D\uDC11",
    tier: 3,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: sheepAbility(1),
    level2Ability: sheepAbility(2),
    level3Ability: sheepAbility(3),
};

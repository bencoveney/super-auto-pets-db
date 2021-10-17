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
exports.cricket = void 0;
var cricketSummoned = {
    name: "Cricket",
    tier: "Summoned",
    baseAttack: -1,
    baseHealth: -1,
};
function cricketAbility(level) {
    return {
        description: "Faint: Summon a " + level + "/" + level + " Cricket",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: __assign(__assign({}, cricketSummoned), { baseAttack: level, baseHealth: level }),
        },
    };
}
exports.cricket = {
    name: "Cricket",
    tier: 1,
    baseAttack: 1,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: cricketAbility(1),
    level2Ability: cricketAbility(2),
    level3Ability: cricketAbility(3),
};

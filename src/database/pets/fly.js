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
exports.fly = void 0;
var flySummoned = {
    name: "Fly",
    tier: "Summoned",
    baseAttack: -1,
    baseHealth: -1,
};
function flyAbility(level) {
    return {
        description: "Friend faints: Summon a " + level * 2 + "/" + level * 2 + " fly in its place",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "SummonPet",
            pet: __assign(__assign({}, flySummoned), { baseAttack: level * 2, baseHealth: level * 2 }),
        },
    };
}
exports.fly = {
    name: "Fly",
    tier: 6,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack"],
    level1Ability: flyAbility(1),
    level2Ability: flyAbility(2),
    level3Ability: flyAbility(3),
};

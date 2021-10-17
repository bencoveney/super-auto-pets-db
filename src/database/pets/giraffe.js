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
exports.giraffe = void 0;
function giraffeAbility(level) {
    return {
        description: "End turn: Give " + level + " friends ahead +1/+1",
        trigger: "EndOfTurn" /* EndOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "FriendAhead",
                n: level,
            },
            attackAmount: 1,
            healthAmount: 1,
            untilEndOfBattle: false,
        },
    };
}
exports.giraffe = {
    name: "Giraffe",
    tier: 3,
    baseAttack: 1,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: __assign(__assign({}, giraffeAbility(1)), { description: "End turn: Give friend ahead +1/+1" }),
    level2Ability: giraffeAbility(2),
    level3Ability: giraffeAbility(3),
};

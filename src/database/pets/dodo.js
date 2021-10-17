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
exports.dodo = void 0;
function dodoAbility(level) {
    return {
        description: "Start of battle: Give Attack to " + level + " friends ahead.",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "TransferStats",
            copyAttack: true,
            copyHealth: false,
            from: {
                kind: "Self",
            },
            to: {
                kind: "FriendAhead",
                n: level,
            },
        },
    };
}
exports.dodo = {
    name: "Dodo",
    tier: 2,
    baseAttack: 1,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: __assign(__assign({}, dodoAbility(1)), { description: "Start of battle: Give Attack to friend ahead." }),
    level2Ability: dodoAbility(2),
    level3Ability: dodoAbility(3),
};

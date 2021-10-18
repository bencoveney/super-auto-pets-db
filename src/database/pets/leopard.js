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
exports.leopard = void 0;
function leopardAbility(level) {
    return {
        description: "Start of battle: Deal 50% Attack damage to " + level + " random enemies.",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "RandomEnemy",
                n: level,
            },
            amount: { attackDamagePercent: 50 },
        },
    };
}
exports.leopard = {
    name: "Leopard",
    unicodeCodePoint: "\uD83D\uDC06",
    tier: 6,
    baseAttack: 6,
    baseHealth: 4,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: __assign(__assign({}, leopardAbility(1)), { description: "Start of battle: Deal 50% Attack damage to a random enemy." }),
    level2Ability: leopardAbility(2),
    level3Ability: leopardAbility(3),
};

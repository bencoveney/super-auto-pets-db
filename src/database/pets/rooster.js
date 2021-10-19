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
exports.rooster = void 0;
var chick = {
    name: "Chick",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83D\uDC24",
    },
    tier: "Summoned",
    baseAttack: -1,
    baseHealth: -1,
};
function roosterAbility(level) {
    return {
        description: "Faint: Summon " + level + " Chicks with the same Attack as this.",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: chick,
            // TODO: Represent copied attack value.
        },
    };
}
exports.rooster = {
    name: "Rooster",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83D\uDC13",
    },
    tier: 4,
    baseAttack: 3,
    baseHealth: 3,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: __assign(__assign({}, roosterAbility(1)), { description: "Faint: Summon a Chick with the same Attack as this." }),
    level2Ability: roosterAbility(2),
    level3Ability: roosterAbility(3),
};

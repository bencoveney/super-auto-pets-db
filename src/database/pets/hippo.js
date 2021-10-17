"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hippo = void 0;
function hippoAbility(level) {
    return {
        description: "Knock out: Gain +" + level * 2 + "/+" + level * 2 + ".",
        trigger: "KnockOut" /* KnockOut */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "Self",
            },
            attackAmount: level * 2,
            healthAmount: level * 2,
            untilEndOfBattle: false,
        },
    };
}
exports.hippo = {
    name: "Hippo",
    tier: 4,
    baseAttack: 4,
    baseHealth: 7,
    packs: ["StandardPack"],
    level1Ability: hippoAbility(1),
    level2Ability: hippoAbility(2),
    level3Ability: hippoAbility(3),
};

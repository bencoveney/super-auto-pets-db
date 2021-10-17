"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dromedary = void 0;
function dromedaryAbility(level) {
    return {
        description: "Start of turn: Give shop animals +" + level + "/+" + level,
        trigger: "StartOfTurn" /* StartOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            untilEndOfBattle: false,
            target: {
                kind: "EachShopAnimal",
            },
            attackAmount: level,
            healthAmount: level,
        },
    };
}
exports.dromedary = {
    name: "Dromedary",
    tier: 2,
    baseAttack: 2,
    baseHealth: 4,
    packs: ["ExpansionPack1"],
    level1Ability: dromedaryAbility(1),
    level2Ability: dromedaryAbility(2),
    level3Ability: dromedaryAbility(3),
};

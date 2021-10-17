"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dragon = void 0;
function dragonAbility(level) {
    return {
        description: "Buy tier 1 animal: Give all friends +" + level + "/+" + level + ".",
        trigger: "BuyTier1Animal" /* BuyTier1Animal */,
        triggeredBy: {
            // TODO: Should by be a property of shop animals rather than friends?
            kind: "EachFriend",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "EachFriend",
            },
            attackAmount: level,
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.dragon = {
    name: "Dragon",
    tier: 6,
    baseAttack: 6,
    baseHealth: 8,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: dragonAbility(1),
    level2Ability: dragonAbility(2),
    level3Ability: dragonAbility(3),
};

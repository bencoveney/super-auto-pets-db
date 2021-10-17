"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbit = void 0;
function rabbitAbility(level) {
    return {
        description: "Friend eats shop food: Give it +" + level + " Health",
        trigger: "EatsShopFood" /* EatsShopFood */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "TriggeringEntity",
            },
            attackAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.rabbit = {
    name: "Rabbit",
    tier: 3,
    baseAttack: 3,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: rabbitAbility(1),
    level2Ability: rabbitAbility(2),
    level3Ability: rabbitAbility(3),
};

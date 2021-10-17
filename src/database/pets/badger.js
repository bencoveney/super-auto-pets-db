"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badger = void 0;
function badgerAbility(level) {
    return {
        description: "Faint: Deal Attack damage to adjacent animals",
        trigger: "EatsShopFood" /* EatsShopFood */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "AdjacentAnimals",
            },
            amount: { attackDamagePercent: 100 },
        },
    };
}
exports.badger = {
    name: "Badger",
    tier: 3,
    baseAttack: 5,
    baseHealth: 4,
    packs: ["StandardPack"],
    level1Ability: badgerAbility(1),
    level2Ability: badgerAbility(2),
    level3Ability: badgerAbility(3),
};

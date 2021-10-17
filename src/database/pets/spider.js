"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spider = void 0;
function spiderAbility(level) {
    return {
        description: "Faint: Summon one tier 3 animal as a " + level + "/" + level + ".",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: {
                // TODO: Summon correct pet.
                name: "Tier 3 animal",
                tier: "Summoned",
                baseAttack: level * 2,
                baseHealth: level * 2,
            },
        },
    };
}
exports.spider = {
    name: "Spider",
    tier: 2,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: spiderAbility(1),
    level2Ability: spiderAbility(2),
    level3Ability: spiderAbility(3),
};

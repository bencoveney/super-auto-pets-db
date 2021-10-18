"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eagle = void 0;
function eagleAbility(level) {
    return {
        description: "Faint: Summon one Lvl. " + level + " tier 6 animal.",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: {
                // TODO: Summon correct pet.
                name: "Tier 6 animal",
                unicodeCodePoint: "\uD83E\uDD85",
                tier: "Summoned",
                // TODO: Don't specify stats here.
                baseAttack: -1,
                baseHealth: -1,
                // TODO: Specify level here.
            },
        },
    };
}
exports.eagle = {
    name: "Eagle",
    unicodeCodePoint: "\uD83E\uDD85",
    tier: 5,
    baseAttack: 6,
    baseHealth: 5,
    packs: ["ExpansionPack1"],
    level1Ability: eagleAbility(1),
    level2Ability: eagleAbility(2),
    level3Ability: eagleAbility(3),
};

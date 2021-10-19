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
                image: {
                    source: "noto-emoji",
                    unicodeCodePoint: "\uD83D\uDD78\uFE0F",
                },
                tier: "Summoned",
                baseAttack: level * 2,
                baseHealth: level * 2,
            },
        },
    };
}
exports.spider = {
    name: "Spider",
    image: {
        source: "noto-emoji",
        // TODO: Shouldn't this be \u{1F577}\u{FE0F} ?
        unicodeCodePoint: "\uD83D\uDD77",
    },
    tier: 2,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: spiderAbility(1),
    level2Ability: spiderAbility(2),
    level3Ability: spiderAbility(3),
};

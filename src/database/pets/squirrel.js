"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squirrel = void 0;
function squirrelAbility(level) {
    return {
        description: "Buy: Clear and fill shops with food.",
        trigger: "LevelUp" /* LevelUp */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "RefillShops",
            shop: "All",
            food: "Any",
        },
    };
}
exports.squirrel = {
    name: "Squirrel",
    // TODO: Shouldn't this be \u{1F43F}\u{FE0F} ?
    unicodeCodePoint: "\uD83D\uDC3F",
    tier: 4,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: squirrelAbility(1),
    level2Ability: squirrelAbility(2),
    level3Ability: squirrelAbility(3),
};

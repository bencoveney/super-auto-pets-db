"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flamingo = void 0;
function flamingoAbility(level) {
    return {
        description: "Faint: Give the two friends behind +" + level + "/+" + level + ".",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "FriendBehind",
                n: 2,
            },
            attackAmount: +level,
            healthAmount: +level,
            untilEndOfBattle: false,
        },
    };
}
exports.flamingo = {
    name: "Flamingo",
    unicodeCodePoint: "\uD83E\uDDA9",
    tier: 2,
    baseAttack: 3,
    baseHealth: 1,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: flamingoAbility(1),
    level2Ability: flamingoAbility(2),
    level3Ability: flamingoAbility(3),
};

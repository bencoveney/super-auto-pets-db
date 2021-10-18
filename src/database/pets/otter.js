"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otter = void 0;
function otterAbility(level) {
    return {
        description: "Buy: Give a random friend +" + level + "/+" + level,
        trigger: "Buy" /* Buy */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "RandomFriend",
                n: 1,
            },
            attackAmount: level,
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
exports.otter = {
    name: "Otter",
    unicodeCodePoint: "\uD83E\uDDA6",
    tier: 1,
    baseAttack: 1,
    baseHealth: 2,
    packs: ["StandardPack"],
    level1Ability: otterAbility(1),
    level2Ability: otterAbility(2),
    level3Ability: otterAbility(3),
};

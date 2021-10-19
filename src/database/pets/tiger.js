"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiger = void 0;
function tigerAbility(level) {
    return {
        description: "The friend ahead casts their ability twice in battle.",
        trigger: "CastsAbility" /* CastsAbility */,
        triggeredBy: {
            kind: "FriendAhead",
            n: 1,
        },
        effect: {
            kind: "RepeatAbility",
            target: {
                // TODO: Should this be targeting the ability rather than the entity?
                kind: "TriggeringEntity",
            },
        },
    };
}
exports.tiger = {
    name: "Tiger",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\uD83D\uDC05",
    },
    tier: 6,
    baseAttack: 4,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: tigerAbility(1),
    level2Ability: tigerAbility(2),
    level3Ability: tigerAbility(3),
};

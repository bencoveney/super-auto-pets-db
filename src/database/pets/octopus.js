"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.octopus = void 0;
function octopusAbility(level) {
    if (level <= 1) {
        return {
            description: `Level-up: Gain +8/+8.`,
            trigger: "LevelUp" /* LevelUp */,
            triggeredBy: {
                kind: "Self",
            },
            effect: {
                kind: "ModifyStats",
                target: {
                    kind: "Self",
                },
                attackAmount: 8,
                healthAmount: 8,
                untilEndOfBattle: false,
            },
        };
    }
    if (level <= 2) {
        return {
            description: `Level-up: Gain +8/+8 and a new ability.`,
            trigger: "LevelUp" /* LevelUp */,
            triggeredBy: {
                kind: "Self",
            },
            effect: {
                kind: "AllOf",
                effects: [
                    {
                        kind: "ModifyStats",
                        target: {
                            kind: "Self",
                        },
                        attackAmount: 8,
                        healthAmount: 8,
                        untilEndOfBattle: false,
                    },
                    {
                        kind: "GainAbility",
                        target: {
                            kind: "Self",
                        },
                    },
                ],
            },
        };
    }
    return {
        description: `Before attack: Deal 5 damage to all enemies`,
        trigger: "BeforeAttack" /* BeforeAttack */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "EachEnemy",
            },
            amount: 5,
        },
    };
}
exports.octopus = {
    name: "Octopus",
    image: {
        source: "noto-emoji",
        unicodeCodePoint: "\u{1F419}",
    },
    tier: 6,
    baseAttack: 8,
    baseHealth: 8,
    packs: ["ExpansionPack1"],
    level1Ability: octopusAbility(1),
    level2Ability: octopusAbility(2),
    level3Ability: octopusAbility(3),
};

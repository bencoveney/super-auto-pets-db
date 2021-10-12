"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPets = void 0;
function antAbility(level) {
    return {
        description: "Faint: Give a random friend +" + level * 2 + "/+" + level,
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                attackAmount: level * 2,
                healthAmount: level,
                target: {
                    kind: "RandomFriend",
                },
                duration: "UntilEndOfPhase",
            },
        ],
    };
}
var ant = {
    name: "Ant",
    tier: 1,
    baseAttack: 2,
    baseHp: 1,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: antAbility(1),
    level2Ability: antAbility(2),
    level3Ability: antAbility(3),
};
function beaverAbility(level) {
    return {
        description: "Sell: Give two random friends +" + level + " health",
        trigger: "Sell" /* Sell */,
        triggeredBy: {
            kind: "Self",
        },
        times: 2,
        effect: [
            {
                kind: "ModifyStats",
                healthAmount: level,
                target: {
                    kind: "RandomFriend",
                },
                duration: "Permanent",
            },
        ],
    };
}
var beaver = {
    name: "Beaver",
    tier: 1,
    baseAttack: 2,
    baseHp: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: beaverAbility(1),
    level2Ability: beaverAbility(2),
    level3Ability: beaverAbility(3),
};
function beetleAbility(level) {
    return {
        description: "Eat shop food: Give shop animals +" + level + " health",
        trigger: "EatsShopFood" /* EatsShopFood */,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                healthAmount: level,
                target: {
                    kind: "EachShopAnimal",
                },
                duration: "Permanent",
            },
        ],
    };
}
var beetle = {
    name: "Beetle",
    tier: 1,
    baseAttack: 2,
    baseHp: 3,
    packs: ["ExpansionPack1"],
    level1Ability: beetleAbility(1),
    level2Ability: beetleAbility(2),
    level3Ability: beetleAbility(3),
};
function bluebirdAbility(level) {
    return {
        description: "End turn: Give left-most friend +" + level + " attack",
        trigger: "EndOfTurn" /* EndOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                attackAmount: level,
                target: {
                    kind: "LeftMostFriend",
                },
                duration: "Permanent",
            },
        ],
    };
}
var bluebird = {
    name: "Bluebird",
    tier: 1,
    baseAttack: 2,
    baseHp: 3,
    packs: ["ExpansionPack1"],
    level1Ability: bluebirdAbility(1),
    level2Ability: bluebirdAbility(2),
    level3Ability: bluebirdAbility(3),
};
var cricketSummoned = {
    name: "Cricket",
    tier: 1,
    baseAttack: -1,
    baseHp: -1,
};
function cricketAbility(level) {
    return {
        description: "Faint: Summon a " + level + "/" + level + " Cricket",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "SummonPet",
                pet: __assign(__assign({}, cricketSummoned), { baseAttack: level, baseHp: level }),
            },
        ],
    };
}
var cricket = {
    name: "Cricket",
    tier: 1,
    baseAttack: 1,
    baseHp: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: cricketAbility(1),
    level2Ability: cricketAbility(2),
    level3Ability: cricketAbility(3),
};
function duckAbility(level) {
    return {
        description: "Sell: Give shop animals +" + level + "/+" + level,
        trigger: "Sell" /* Sell */,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                target: {
                    kind: "EachShopAnimal",
                },
                attackAmount: level,
                healthAmount: level,
                duration: "Permanent",
            },
        ],
    };
}
var duck = {
    name: "Duck",
    tier: 1,
    baseAttack: 1,
    baseHp: 2,
    packs: ["StandardPack"],
    level1Ability: duckAbility(1),
    level2Ability: duckAbility(2),
    level3Ability: duckAbility(3),
};
function fishAbility(level) {
    return {
        description: "Level-up: Give all friends +" + level + "/+" + level,
        trigger: "LevelUp" /* LevelUp */,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                target: {
                    kind: "EachFriend",
                },
                attackAmount: level,
                healthAmount: level,
                duration: "Permanent",
            },
        ],
    };
}
var fish = {
    name: "Fish",
    tier: 1,
    baseAttack: 2,
    baseHp: 3,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: fishAbility(1),
    level2Ability: fishAbility(2),
};
function horseAbility(level) {
    return {
        description: "Friend summoned: Give it +" + level + " Attack until end of battle",
        trigger: "Summoned" /* Summoned */,
        triggeredBy: {
            kind: "EachFriend",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                target: {
                    kind: "TriggeringEntity",
                },
                attackAmount: level,
                duration: "UntilEndOfBattle",
            },
        ],
    };
}
var horse = {
    name: "Horse",
    tier: 1,
    baseAttack: 1,
    baseHp: 1,
    packs: ["StandardPack"],
    level1Ability: horseAbility(1),
    level2Ability: horseAbility(2),
    level3Ability: horseAbility(3),
};
function ladybugAbility(level) {
    return {
        description: "Buy food: Gain +" + level + "/+" + level + " until end of battle",
        trigger: "BuyFood" /* BuyFood */,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                attackAmount: level,
                healthAmount: level,
                target: {
                    kind: "Self",
                },
                duration: "UntilEndOfBattle",
            },
        ],
    };
}
var ladybug = {
    name: "Ladybug",
    tier: 1,
    baseAttack: 1,
    baseHp: 3,
    packs: ["ExpansionPack1"],
    level1Ability: ladybugAbility(1),
    level2Ability: ladybugAbility(2),
    level3Ability: ladybugAbility(3),
};
function mosquitoAbility(level) {
    return {
        description: "Start of battle: Deal " + level + " damage to a random enemy",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "None",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                target: {
                    kind: "RandomEnemy",
                },
                healthAmount: level,
                duration: "UntilEndOfBattle",
            },
        ],
    };
}
var mosquito = {
    name: "Mosquito",
    tier: 1,
    baseAttack: 2,
    baseHp: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: mosquitoAbility(1),
    level2Ability: mosquitoAbility(2),
    level3Ability: mosquitoAbility(3),
};
function otterAbility(level) {
    return {
        description: "Buy: Give a random friend +" + level + "/+" + level,
        trigger: "Buy" /* Buy */,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                target: {
                    kind: "RandomFriend",
                },
                attackAmount: level,
                healthAmount: level,
                duration: "Permanent",
            },
        ],
    };
}
var otter = {
    name: "Otter",
    tier: 1,
    baseAttack: 1,
    baseHp: 2,
    packs: ["StandardPack"],
    level1Ability: otterAbility(1),
    level2Ability: otterAbility(2),
    level3Ability: otterAbility(3),
};
function pigAbility(level) {
    return {
        description: "Sell: Gain an extra " + level + " gold",
        trigger: "Sell" /* Sell */,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "GainGold",
                amount: level,
            },
        ],
    };
}
var pig = {
    name: "Pig",
    tier: 1,
    baseAttack: 2,
    baseHp: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: pigAbility(1),
    level2Ability: pigAbility(2),
    level3Ability: pigAbility(3),
};
var pets = [
    ant,
    beaver,
    beetle,
    bluebird,
    cricket,
    duck,
    fish,
    horse,
    ladybug,
    mosquito,
    otter,
    pig,
];
function getPets() {
    return pets;
}
exports.getPets = getPets;

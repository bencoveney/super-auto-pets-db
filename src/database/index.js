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
        effect: {
            kind: "ModifyStats",
            attackAmount: level * 2,
            healthAmount: level,
            target: {
                kind: "RandomFriend",
                n: 1,
            },
            duration: "UntilEndOfPhase",
        },
    };
}
var ant = {
    name: "Ant",
    tier: 1,
    baseAttack: 2,
    baseHealth: 1,
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
        effect: {
            kind: "ModifyStats",
            healthAmount: level,
            target: {
                kind: "RandomFriend",
                n: 2,
            },
            duration: "Permanent",
        },
    };
}
var beaver = {
    name: "Beaver",
    tier: 1,
    baseAttack: 2,
    baseHealth: 2,
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
        effect: {
            kind: "ModifyStats",
            healthAmount: level,
            target: {
                kind: "EachShopAnimal",
            },
            duration: "Permanent",
        },
    };
}
var beetle = {
    name: "Beetle",
    tier: 1,
    baseAttack: 2,
    baseHealth: 3,
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
        effect: {
            kind: "ModifyStats",
            attackAmount: level,
            target: {
                kind: "LeftMostFriend",
            },
            duration: "Permanent",
        },
    };
}
var bluebird = {
    name: "Bluebird",
    tier: 1,
    baseAttack: 2,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: bluebirdAbility(1),
    level2Ability: bluebirdAbility(2),
    level3Ability: bluebirdAbility(3),
};
var cricketSummoned = {
    name: "Cricket",
    tier: 1,
    baseAttack: -1,
    baseHealth: -1,
};
function cricketAbility(level) {
    return {
        description: "Faint: Summon a " + level + "/" + level + " Cricket",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: __assign(__assign({}, cricketSummoned), { baseAttack: level, baseHealth: level }),
        },
    };
}
var cricket = {
    name: "Cricket",
    tier: 1,
    baseAttack: 1,
    baseHealth: 2,
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
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "EachShopAnimal",
            },
            attackAmount: level,
            healthAmount: level,
            duration: "Permanent",
        },
    };
}
var duck = {
    name: "Duck",
    tier: 1,
    baseAttack: 1,
    baseHealth: 2,
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
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "EachFriend",
            },
            attackAmount: level,
            healthAmount: level,
            duration: "Permanent",
        },
    };
}
var fish = {
    name: "Fish",
    tier: 1,
    baseAttack: 2,
    baseHealth: 3,
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
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "TriggeringEntity",
            },
            attackAmount: level,
            duration: "UntilEndOfBattle",
        },
    };
}
var horse = {
    name: "Horse",
    tier: 1,
    baseAttack: 1,
    baseHealth: 1,
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
        effect: {
            kind: "ModifyStats",
            attackAmount: level,
            healthAmount: level,
            target: {
                kind: "Self",
            },
            duration: "UntilEndOfBattle",
        },
    };
}
var ladybug = {
    name: "Ladybug",
    tier: 1,
    baseAttack: 1,
    baseHealth: 3,
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
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "RandomEnemy",
                n: 1,
            },
            healthAmount: level,
            duration: "UntilEndOfBattle",
        },
    };
}
var mosquito = {
    name: "Mosquito",
    tier: 1,
    baseAttack: 2,
    baseHealth: 2,
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
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "RandomFriend",
                n: 1,
            },
            attackAmount: level,
            healthAmount: level,
            duration: "Permanent",
        },
    };
}
var otter = {
    name: "Otter",
    tier: 1,
    baseAttack: 1,
    baseHealth: 2,
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
        effect: {
            kind: "GainGold",
            amount: level,
        },
    };
}
var pig = {
    name: "Pig",
    tier: 1,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: pigAbility(1),
    level2Ability: pigAbility(2),
    level3Ability: pigAbility(3),
};
function batAbility(level) {
    return {
        description: "Start of battle: Make " + level + " enemies Weak.",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ApplyStatus",
            status: {
                name: "Weak",
            },
            to: {
                kind: "RandomEnemy",
                n: level,
            },
        },
    };
}
var bat = {
    name: "Bat",
    tier: 2,
    baseAttack: 1,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: __assign(__assign({}, batAbility(1)), { description: "Start of battle: Make 1 enemy Weak." }),
    level2Ability: batAbility(2),
    level3Ability: batAbility(3),
};
function crabAbility(level) {
    return {
        description: "Start of battle: Copy Health from friend ahead.",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "TransferStats",
            copyAttack: false,
            copyHealth: true,
            from: {
                kind: "FriendAhead",
                n: 1,
            },
            to: {
                kind: "Self",
            },
        },
    };
}
var crab = {
    name: "Crab",
    tier: 2,
    baseAttack: 3,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: crabAbility(1),
    level2Ability: crabAbility(2),
    level3Ability: crabAbility(3),
};
function dodoAbility(level) {
    return {
        description: "Start of battle: Give Attack to " + level + " friends ahead.",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "TransferStats",
            copyAttack: true,
            copyHealth: false,
            from: {
                kind: "Self",
            },
            to: {
                kind: "FriendAhead",
                n: level,
            },
        },
    };
}
var dodo = {
    name: "Dodo",
    tier: 2,
    baseAttack: 1,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: __assign(__assign({}, dodoAbility(1)), { description: "Start of battle: Give Attack to friend ahead." }),
    level2Ability: dodoAbility(2),
    level3Ability: dodoAbility(3),
};
function dogAbility(level) {
    return {
        description: "Friend summoned: Gain +" + level + " Attack or +" + level + " Health.",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "OneOf",
            effects: [
                {
                    kind: "ModifyStats",
                    duration: "UntilEndOfPhase",
                    target: {
                        kind: "Self",
                    },
                    attackAmount: level,
                },
                {
                    kind: "ModifyStats",
                    duration: "UntilEndOfPhase",
                    target: {
                        kind: "Self",
                    },
                    healthAmount: level,
                },
            ],
        },
    };
}
var dog = {
    name: "Dog",
    tier: 2,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: dogAbility(1),
    level2Ability: dogAbility(2),
    level3Ability: dogAbility(3),
};
function dromedaryAbility(level) {
    return {
        description: "Start of turn: Give shop animals +" + level + "/+" + level,
        trigger: "StartOfTurn" /* StartOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            duration: "UntilEndOfPhase",
            target: {
                kind: "EachShopAnimal",
            },
            attackAmount: level,
            healthAmount: level,
        },
    };
}
var dromedary = {
    name: "Dromedary",
    tier: 2,
    baseAttack: 2,
    baseHealth: 4,
    packs: ["ExpansionPack1"],
    level1Ability: dromedaryAbility(1),
    level2Ability: dromedaryAbility(2),
    level3Ability: dromedaryAbility(3),
};
function elephantAbility(level) {
    return {
        description: "Before Attack: Deal 1 damage to " + level + " friends behind.",
        trigger: "BeforeAttack" /* BeforeAttack */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            duration: "UntilEndOfPhase",
            target: {
                kind: "FriendBehind",
                n: level,
            },
            attackAmount: -1,
        },
    };
}
var elephant = {
    name: "Elephant",
    tier: 2,
    baseAttack: 3,
    baseHealth: 5,
    packs: ["StandardPack"],
    level1Ability: elephantAbility(1),
    level2Ability: elephantAbility(2),
    level3Ability: elephantAbility(3),
};
function flamingoAbility(level) {
    return {
        description: "Faint: Give the two friends behind +" + level + "/+" + level + ".",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            duration: "UntilEndOfPhase",
            target: {
                kind: "FriendBehind",
                n: 2,
            },
            attackAmount: +level,
            healthAmount: +level,
        },
    };
}
var flamingo = {
    name: "Flamingo",
    tier: 2,
    baseAttack: 3,
    baseHealth: 1,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: flamingoAbility(1),
    level2Ability: flamingoAbility(2),
    level3Ability: flamingoAbility(3),
};
function hedgehogAbility(level) {
    return {
        description: "Faint: Deal " + level * 2 + " damage to all.",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            duration: "UntilEndOfPhase",
            target: {
                kind: "All",
            },
            healthAmount: -(level * 2),
        },
    };
}
var hedgehog = {
    name: "Hedgehog",
    tier: 2,
    baseAttack: 3,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: hedgehogAbility(1),
    level2Ability: hedgehogAbility(2),
    level3Ability: hedgehogAbility(3),
};
function peacockAbility(level) {
    return {
        description: "Hurt: Gain " + level * 2 + " Attack.",
        trigger: "Hurt" /* Hurt */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            duration: "UntilEndOfPhase",
            target: {
                kind: "All",
            },
            attackAmount: level * 2,
        },
    };
}
var peacock = {
    name: "Peacock",
    tier: 2,
    baseAttack: 3,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: peacockAbility(1),
    level2Ability: peacockAbility(2),
    level3Ability: peacockAbility(3),
};
var dirtyRatSummoned = {
    name: "Cricket",
    tier: 1,
    baseAttack: 1,
    baseHealth: 1,
};
function ratAbility(level) {
    return {
        description: "Faint: summon one " + level + "/" + level + " Dirty Rat for the opponent that betrays him.",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: dirtyRatSummoned,
        },
    };
}
var rat = {
    name: "Rat",
    tier: 2,
    baseAttack: 4,
    baseHealth: 5,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: ratAbility(1),
    level2Ability: ratAbility(2),
    level3Ability: ratAbility(3),
};
function shrimpAbility(level) {
    return {
        description: "Friend sold: Give a random friend +" + level + " Health.",
        trigger: "Sell" /* Sell */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "ModifyStats",
            duration: "UntilEndOfPhase",
            target: {
                kind: "RandomFriend",
                n: 1,
            },
            healthAmount: level,
        },
    };
}
var shrimp = {
    name: "Shrimp",
    tier: 2,
    baseAttack: 2,
    baseHealth: 1,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: shrimpAbility(1),
    level2Ability: shrimpAbility(2),
    level3Ability: shrimpAbility(3),
};
function spiderAbility(level) {
    return {
        description: "Faint: Summon one tier 3 animal as a " + level + "/" + level + ".",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "SummonPet",
            pet: __assign(__assign({}, cricketSummoned), { baseAttack: level * 2, baseHealth: level * 2 }),
        },
    };
}
var spider = {
    name: "Spider",
    tier: 2,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: spiderAbility(1),
    level2Ability: spiderAbility(2),
    level3Ability: spiderAbility(3),
};
function swanAbility(level) {
    return {
        description: "Start of turn: Gain 1 gold.",
        trigger: "StartOfTurn" /* StartOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "GainGold",
            amount: level,
        },
    };
}
var swan = {
    name: "Swan",
    tier: 2,
    baseAttack: 3,
    baseHealth: 4,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: swanAbility(1),
    level2Ability: swanAbility(2),
    level3Ability: swanAbility(3),
};
function tabbyCatAbility(level) {
    return {
        description: "Eats shop food: Give friends +" + level + " Attack until end of battle",
        trigger: "EatsShopFood" /* EatsShopFood */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            duration: "UntilEndOfBattle",
            target: {
                kind: "EachFriend",
            },
            attackAmount: level,
        },
    };
}
var tabbyCat = {
    name: "Tabby Cat",
    tier: 2,
    baseAttack: 4,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: tabbyCatAbility(1),
    level2Ability: tabbyCatAbility(2),
    level3Ability: tabbyCatAbility(3),
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
    bat,
    crab,
    dodo,
    dog,
    dromedary,
    elephant,
    flamingo,
    hedgehog,
    peacock,
    rat,
    shrimp,
    spider,
    swan,
    tabbyCat,
];
function getPets() {
    return pets;
}
exports.getPets = getPets;

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
            untilEndOfBattle: false,
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
            untilEndOfBattle: false,
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
            untilEndOfBattle: false,
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
            untilEndOfBattle: false,
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
            untilEndOfBattle: false,
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
            untilEndOfBattle: false,
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
            untilEndOfBattle: true,
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
            untilEndOfBattle: true,
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
            kind: "DealDamage",
            target: {
                kind: "RandomEnemy",
                n: 1,
            },
            amount: level,
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
            untilEndOfBattle: false,
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
            // TODO: Proper status effects.
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
                    untilEndOfBattle: false,
                    target: {
                        kind: "Self",
                    },
                    attackAmount: level,
                },
                {
                    kind: "ModifyStats",
                    untilEndOfBattle: false,
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
            untilEndOfBattle: false,
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
            kind: "DealDamage",
            target: {
                kind: "FriendBehind",
                n: level,
            },
            amount: 1,
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
            kind: "DealDamage",
            target: {
                kind: "All",
            },
            amount: level * 2,
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
            target: {
                kind: "All",
            },
            attackAmount: level * 2,
            untilEndOfBattle: false,
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
    // TODO: Represent random attacks?
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
            target: {
                kind: "RandomFriend",
                n: 1,
            },
            healthAmount: level,
            untilEndOfBattle: false,
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
            target: {
                kind: "EachFriend",
            },
            attackAmount: level,
            untilEndOfBattle: true,
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
function badgerAbility(level) {
    return {
        description: "Faint: Deal Attack damage to adjacent animals",
        trigger: "EatsShopFood" /* EatsShopFood */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "AdjacentAnimals",
            },
            amount: "AttackDamage",
        },
    };
}
var badger = {
    name: "Badger",
    tier: 3,
    baseAttack: 5,
    baseHealth: 4,
    packs: ["StandardPack"],
    level1Ability: badgerAbility(1),
    level2Ability: badgerAbility(2),
    level3Ability: badgerAbility(3),
};
function blowfishAbility(level) {
    return {
        description: "Hurt: Deal " + level * 2 + " damage to a random enemy.",
        trigger: "Hurt" /* Hurt */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "DealDamage",
            target: {
                kind: "RandomEnemy",
                n: 1,
            },
            amount: level * 2,
        },
    };
}
var blowfish = {
    name: "Blowfish",
    tier: 3,
    baseAttack: 3,
    baseHealth: 5,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: blowfishAbility(1),
    level2Ability: blowfishAbility(2),
    level3Ability: blowfishAbility(3),
};
function caterpillarAbility(level) {
    if (level <= 2) {
        return {
            description: "Start of turn: Gain 1 Experience",
            trigger: "StartOfTurn" /* StartOfTurn */,
            triggeredBy: {
                kind: "Self",
            },
            effect: {
                kind: "GainExperience",
                target: {
                    kind: "Self",
                },
                amount: 1,
            },
        };
    }
    return {
        description: "Start of battle: Evolve into a Butterfly",
        trigger: "StartOfTurn" /* StartOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "Evolve",
        },
    };
}
var caterpillar = {
    name: "Caterpillar",
    tier: 3,
    baseAttack: 1,
    baseHealth: 4,
    packs: ["ExpansionPack1"],
    level1Ability: caterpillarAbility(1),
    level2Ability: caterpillarAbility(2),
    level3Ability: caterpillarAbility(3),
};
function camelAbility(level) {
    return {
        description: "Hurt: Give friend behind +" + level + "/+" + level * 2,
        trigger: "Hurt" /* Hurt */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "FriendBehind",
                n: 1,
            },
            attackAmount: level,
            healthAmount: level * 2,
            untilEndOfBattle: false,
        },
    };
}
var camel = {
    name: "Camel",
    tier: 3,
    baseAttack: 2,
    baseHealth: 5,
    packs: ["StandardPack"],
    level1Ability: camelAbility(1),
    level2Ability: camelAbility(2),
    level3Ability: camelAbility(3),
};
function hatchingChickAbility(level) {
    if (level <= 1) {
        return {
            description: "End turn: Give +5/+5 to friend ahead until end of battle.",
            trigger: "EndOfTurn" /* EndOfTurn */,
            triggeredBy: {
                kind: "Self",
            },
            effect: {
                kind: "ModifyStats",
                target: {
                    kind: "FriendAhead",
                    n: 1,
                },
                attackAmount: 5,
                healthAmount: 5,
                untilEndOfBattle: true,
            },
        };
    }
    if (level <= 2) {
        return {
            description: "End turn: Give +2/+2 to friend ahead.",
            trigger: "EndOfTurn" /* EndOfTurn */,
            triggeredBy: {
                kind: "Self",
            },
            effect: {
                kind: "ModifyStats",
                target: {
                    kind: "FriendAhead",
                    n: 1,
                },
                attackAmount: 2,
                healthAmount: 2,
                untilEndOfBattle: false,
            },
        };
    }
    return {
        description: "Start of turn: Give +1 Experience to friend ahead",
        trigger: "StartOfTurn" /* StartOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "GainExperience",
            target: {
                kind: "FriendAhead",
                n: 1,
            },
            amount: 1,
        },
    };
}
var hatchingChick = {
    name: "Hatching Chick",
    tier: 3,
    baseAttack: 1,
    baseHealth: 1,
    packs: ["ExpansionPack1"],
    level1Ability: hatchingChickAbility(1),
    level2Ability: hatchingChickAbility(2),
    level3Ability: hatchingChickAbility(3),
};
function giraffeAbility(level) {
    return {
        description: "End turn: Give " + level + " friends ahead +1/+1",
        trigger: "EndOfTurn" /* EndOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "FriendAhead",
                n: level,
            },
            attackAmount: 1,
            healthAmount: 1,
            untilEndOfBattle: false,
        },
    };
}
var giraffe = {
    name: "Giraffe",
    tier: 3,
    baseAttack: 1,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: __assign(__assign({}, giraffeAbility(1)), { description: "End turn: Give friend ahead +1/+1" }),
    level2Ability: giraffeAbility(2),
    level3Ability: giraffeAbility(3),
};
function kangarooAbility(level) {
    return {
        description: "Friend ahead attacks: Gain +" + level * 2 + "/+" + level * 2,
        trigger: "AfterAttack" /* AfterAttack */,
        triggeredBy: {
            kind: "FriendAhead",
            n: 1,
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "Self",
            },
            attackAmount: level * 2,
            healthAmount: level * 2,
            untilEndOfBattle: false,
        },
    };
}
var kangaroo = {
    name: "Kangaroo",
    tier: 3,
    baseAttack: 2,
    baseHealth: 3,
    packs: ["StandardPack"],
    level1Ability: kangarooAbility(1),
    level2Ability: kangarooAbility(2),
    level3Ability: kangarooAbility(3),
};
function owlAbility(level) {
    return {
        description: "Sell: Give a random friend +2/+2",
        trigger: "Sell" /* Sell */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "RandomFriend",
                n: 1,
            },
            attackAmount: 2,
            healthAmount: 2,
            untilEndOfBattle: false,
        },
    };
}
var owl = {
    name: "Owl",
    tier: 3,
    baseAttack: 5,
    baseHealth: 3,
    packs: ["ExpansionPack1"],
    level1Ability: owlAbility(1),
    level2Ability: owlAbility(2),
    level3Ability: owlAbility(3),
};
function oxAbility(level) {
    return {
        description: "Friend ahead attacks: Gain Melon Armor and +" + level * 2 + " attack",
        trigger: "AfterAttack" /* AfterAttack */,
        triggeredBy: {
            kind: "FriendAhead",
            n: 1,
        },
        effect: {
            kind: "AllOf",
            effects: [
                {
                    kind: "ApplyStatus",
                    status: {
                        name: "MelonArmor",
                    },
                    to: {
                        kind: "Self",
                    },
                },
                {
                    kind: "ModifyStats",
                    target: {
                        kind: "Self",
                    },
                    attackAmount: level * 2,
                    untilEndOfBattle: false,
                },
            ],
        },
    };
}
var ox = {
    name: "Ox",
    tier: 3,
    baseAttack: 1,
    baseHealth: 4,
    packs: ["StandardPack"],
    level1Ability: oxAbility(1),
    level2Ability: oxAbility(2),
    level3Ability: oxAbility(3),
};
function puppyAbility(level) {
    return {
        description: "End turn: If you have 2 or more gold, gain +" + level * 2 + "/+" + level * 2,
        trigger: "EndOfTurnWith2PlusGold" /* EndOfTurnWith2PlusGold */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "Self",
            },
            attackAmount: level * 2,
            healthAmount: level * 2,
            untilEndOfBattle: false,
        },
    };
}
var puppy = {
    name: "Puppy",
    tier: 3,
    baseAttack: 1,
    baseHealth: 1,
    packs: ["ExpansionPack1"],
    level1Ability: puppyAbility(1),
    level2Ability: puppyAbility(2),
    level3Ability: puppyAbility(3),
};
function rabbitAbility(level) {
    return {
        description: "Friend eats shop food: Give it +" + level + " Health",
        trigger: "EatsShopFood" /* EatsShopFood */,
        triggeredBy: {
            kind: "EachFriend",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "TriggeringEntity",
            },
            attackAmount: level,
            untilEndOfBattle: false,
        },
    };
}
var rabbit = {
    name: "Rabbit",
    tier: 3,
    baseAttack: 3,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: rabbitAbility(1),
    level2Ability: rabbitAbility(2),
    level3Ability: rabbitAbility(3),
};
var ramSummoned = {
    name: "Ram",
    tier: 1,
    baseAttack: -1,
    baseHealth: -1,
};
function sheepAbility(level) {
    return {
        description: "Faint: Summon two " + level * 2 + "/" + level * 2 + " Rams",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "SummonPet",
            pet: __assign(__assign({}, ramSummoned), { baseAttack: level * 2, baseHealth: level * 2 }),
        },
    };
}
var sheep = {
    name: "Sheep",
    tier: 3,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: sheepAbility(1),
    level2Ability: sheepAbility(2),
    level3Ability: sheepAbility(3),
};
function snailAbility(level) {
    return {
        description: "Buy: If you lost last battle, give all friends +" + level * 2 + "/+" + level,
        trigger: "BuyAfterLoss" /* BuyAfterLoss */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "EachFriend",
            },
            attackAmount: level * 2,
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
var snail = {
    name: "Snail",
    tier: 3,
    baseAttack: 2,
    baseHealth: 2,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: snailAbility(1),
    level2Ability: snailAbility(2),
    level3Ability: snailAbility(3),
};
function tropicalFishAbility(level) {
    return {
        description: "End turn: Give adjacent friends +" + level + " Health",
        trigger: "EndOfTurn" /* EndOfTurn */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ModifyStats",
            target: {
                kind: "AdjacentFriends",
            },
            healthAmount: level,
            untilEndOfBattle: false,
        },
    };
}
var tropicalFish = {
    name: "TropicalFish",
    tier: 3,
    baseAttack: 2,
    baseHealth: 4,
    packs: ["ExpansionPack1"],
    level1Ability: tropicalFishAbility(1),
    level2Ability: tropicalFishAbility(2),
    level3Ability: tropicalFishAbility(3),
};
function turtleAbility(level) {
    return {
        description: "Faint: Give " + level + " friends behind Melon Armor",
        trigger: "Faint" /* Faint */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            kind: "ApplyStatus",
            status: {
                name: "MelonArmor",
            },
            to: {
                kind: "FriendBehind",
                n: level,
            },
        },
    };
}
var turtle = {
    name: "Turtle",
    tier: 3,
    baseAttack: 2,
    baseHealth: 4,
    packs: ["StandardPack", "ExpansionPack1"],
    level1Ability: __assign(__assign({}, turtleAbility(1)), { description: "Faint: Give friend behind Melon Armor" }),
    level2Ability: turtleAbility(2),
    level3Ability: turtleAbility(3),
};
function whaleAbility(level) {
    return {
        description: "Start of battle: Swallow friend ahead and release it as a level " + level + " after fainting.",
        trigger: "StartOfBattle" /* StartOfBattle */,
        triggeredBy: {
            kind: "Self",
        },
        effect: {
            // TODO: This should probably be represented as 2 abilities, but I would need 2 triggers.
            kind: "Swallow",
            target: {
                kind: "FriendAhead",
                n: 1,
            },
        },
    };
}
var whale = {
    name: "Whale",
    tier: 3,
    baseAttack: 2,
    baseHealth: 6,
    packs: ["StandardPack"],
    level1Ability: whaleAbility(1),
    level2Ability: whaleAbility(2),
    level3Ability: whaleAbility(3),
};
var pets = [
    // Tier 1
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
    // Tier 2
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
    // Tier 3
    badger,
    blowfish,
    caterpillar,
    camel,
    hatchingChick,
    giraffe,
    kangaroo,
    owl,
    ox,
    puppy,
    rabbit,
    sheep,
    snail,
    tropicalFish,
    turtle,
    whale,
];
function getPets() {
    return pets;
}
exports.getPets = getPets;

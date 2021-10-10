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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Trigger;
(function (Trigger) {
    Trigger[Trigger["Faint"] = 0] = "Faint";
    Trigger[Trigger["Sell"] = 1] = "Sell";
    Trigger[Trigger["LevelUp"] = 2] = "LevelUp";
    Trigger[Trigger["Summoned"] = 3] = "Summoned";
    Trigger[Trigger["StartOfBattle"] = 4] = "StartOfBattle";
    Trigger[Trigger["Buy"] = 5] = "Buy";
    Trigger[Trigger["BeforeAttack"] = 6] = "BeforeAttack";
    Trigger[Trigger["Hurt"] = 7] = "Hurt";
    Trigger[Trigger["EndOfTurn"] = 8] = "EndOfTurn";
    Trigger[Trigger["AfterAttack"] = 9] = "AfterAttack";
    Trigger[Trigger["EatsShopFood"] = 10] = "EatsShopFood";
    // ...
})(Trigger || (Trigger = {}));
var ant = {
    name: "Ant",
    tier: 1,
    baseAttack: 2,
    baseHp: 1,
    packs: ["StandardPack"],
    level1Ability: {
        description: "Faint: Give a random friend +2/+1",
        trigger: Trigger.Faint,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                attackAmount: 2,
                healthAmount: 1,
                target: {
                    kind: "RandomFriend",
                },
                duration: "UntilEndOfPhase",
            },
        ],
    },
    level2Ability: {
        description: "Faint: Give a random friend +4/+2",
        trigger: Trigger.Faint,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                attackAmount: 4,
                healthAmount: 2,
                target: {
                    kind: "RandomFriend",
                },
                duration: "UntilEndOfPhase",
            },
        ],
    },
    level3Ability: {
        description: "Faint: Give a random friend +6/+3",
        trigger: Trigger.Faint,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                attackAmount: 6,
                healthAmount: 3,
                target: {
                    kind: "RandomFriend",
                },
                duration: "UntilEndOfPhase",
            },
        ],
    },
};
var beaver = {
    name: "Beaver",
    tier: 1,
    baseAttack: 2,
    baseHp: 2,
    packs: ["StandardPack"],
    level1Ability: {
        description: "Sell: Give two random friends +1 health",
        trigger: Trigger.Faint,
        triggeredBy: {
            kind: "Self",
        },
        times: 2,
        effect: [
            {
                kind: "ModifyStats",
                healthAmount: 1,
                target: {
                    kind: "RandomFriend",
                },
                duration: "Permanent",
            },
        ],
    },
    level2Ability: {
        description: "Sell: Give two random friends +2 health",
        trigger: Trigger.Faint,
        triggeredBy: {
            kind: "Self",
        },
        times: 2,
        effect: [
            {
                kind: "ModifyStats",
                healthAmount: 2,
                target: {
                    kind: "RandomFriend",
                },
                duration: "Permanent",
            },
        ],
    },
    level3Ability: {
        description: "Sell: Give two random friends +3 health",
        trigger: Trigger.Faint,
        triggeredBy: {
            kind: "Self",
        },
        times: 2,
        effect: [
            {
                kind: "ModifyStats",
                healthAmount: 3,
                target: {
                    kind: "RandomFriend",
                },
                duration: "Permanent",
            },
        ],
    },
};
var cricketSummoned = {
    name: "Cricket",
    tier: 1,
    baseAttack: -1,
    baseHp: -1,
};
var cricket = {
    name: "Cricket",
    tier: 1,
    baseAttack: 1,
    baseHp: 2,
    packs: ["StandardPack"],
    level1Ability: {
        description: "Faint: Summon a 1/1 Cricket",
        trigger: Trigger.Faint,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "SummonPet",
                pet: __assign(__assign({}, cricketSummoned), { baseAttack: 1, baseHp: 1 }),
            },
        ],
    },
    level2Ability: {
        description: "Faint: Summon a 2/2 Cricket",
        trigger: Trigger.Faint,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "SummonPet",
                pet: __assign(__assign({}, cricketSummoned), { baseAttack: 2, baseHp: 2 }),
            },
        ],
    },
    level3Ability: {
        description: "Faint: Summon a 3/3 Cricket",
        trigger: Trigger.Faint,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "SummonPet",
                pet: __assign(__assign({}, cricketSummoned), { baseAttack: 3, baseHp: 3 }),
            },
        ],
    },
};
var duck = {
    name: "Duck",
    tier: 1,
    baseAttack: 1,
    baseHp: 2,
    packs: ["StandardPack"],
    level1Ability: {
        description: "Sell: Give shop animals +1/+1",
        trigger: Trigger.Sell,
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
                attackAmount: 1,
                healthAmount: 1,
                duration: "Permanent",
            },
        ],
    },
    level2Ability: {
        description: "Sell: Give shop animals +2/+2",
        trigger: Trigger.Sell,
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
                attackAmount: 1,
                healthAmount: 1,
                duration: "Permanent",
            },
        ],
    },
    level3Ability: {
        description: "Sell: Give shop animals +3/+3",
        trigger: Trigger.Sell,
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
                attackAmount: 3,
                healthAmount: 3,
                duration: "Permanent",
            },
        ],
    },
};
var fish = {
    name: "Fish",
    tier: 1,
    baseAttack: 2,
    baseHp: 3,
    packs: ["StandardPack"],
    level1Ability: {
        description: "Level-up: Give all friends +1/+1",
        trigger: Trigger.LevelUp,
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
                attackAmount: 1,
                healthAmount: 1,
                duration: "Permanent",
            },
        ],
    },
    level2Ability: {
        description: "Level-up: Give all friends +2/+2",
        trigger: Trigger.LevelUp,
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
                attackAmount: 2,
                healthAmount: 2,
                duration: "Permanent",
            },
        ],
    },
};
var horse = {
    name: "Horse",
    tier: 1,
    baseAttack: 1,
    baseHp: 1,
    packs: ["StandardPack"],
    level1Ability: {
        description: "Friend summoned: Give it +1 Attack until end of battle",
        trigger: Trigger.Summoned,
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
                attackAmount: 1,
                duration: "UntilEndOfBattle",
            },
        ],
    },
    level2Ability: {
        description: "Friend summoned: Give it +2 Attack until end of battle",
        trigger: Trigger.LevelUp,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                target: {
                    kind: "TriggeringEntity",
                },
                attackAmount: 2,
                duration: "UntilEndOfBattle",
            },
        ],
    },
    level3Ability: {
        description: "Friend summoned: Give it +3 Attack until end of battle",
        trigger: Trigger.LevelUp,
        triggeredBy: {
            kind: "Self",
        },
        times: 1,
        effect: [
            {
                kind: "ModifyStats",
                target: {
                    kind: "TriggeringEntity",
                },
                attackAmount: 3,
                duration: "UntilEndOfBattle",
            },
        ],
    },
};
function mosquitoAbility(level) {
    return {
        description: "Start of battle: Deal " + level + " damage to a random enemy",
        trigger: Trigger.StartOfBattle,
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
    packs: ["StandardPack"],
    level1Ability: mosquitoAbility(1),
    level2Ability: mosquitoAbility(2),
    level3Ability: mosquitoAbility(3),
};
function otterAbility(level) {
    return {
        description: "Buy: Give a random friend +" + level + "/+" + level,
        trigger: Trigger.Buy,
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
        trigger: Trigger.Sell,
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
    packs: ["StandardPack"],
    level1Ability: pigAbility(1),
    level2Ability: pigAbility(2),
    level3Ability: pigAbility(3),
};
var pets = [
    ant,
    beaver,
    cricket,
    duck,
    fish,
    horse,
    mosquito,
    otter,
    pig,
];
var writeApi = __importStar(require("./write_api"));
writeApi.output(pets);

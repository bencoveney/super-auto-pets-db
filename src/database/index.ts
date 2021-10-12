export type Pack = "StandardPack" | "ExpansionPack1";

export interface Pet {
  // The name of the pet.
  name: String;
  // The tier the pet appears in.
  tier: number;
  // The standard starting attack points for the pet.
  baseAttack: number;
  // The standard starting health points for the pet.
  baseHealth: number;
  // Which packs the pet appears in.
  packs?: Pack[];
  // The ability the pet has at level 1.
  level1Ability?: Ability;
  // The ability the pet has at level 2.
  level2Ability?: Ability;
  // The ability the pet has at level 3.
  level3Ability?: Ability;
}

export interface Ability {
  // The text description of the ability.
  description: string;
  // What behaviour (by the trigger entity) will initiate the ability.
  trigger: Trigger;
  // Which entity will trigger the effect.
  triggeredBy: Target;
  // What the effect does.
  effect: Effect;
}

const enum Trigger {
  Faint = "Faint",
  Sell = "Sell",
  LevelUp = "LevelUp",
  Summoned = "Summoned",
  StartOfBattle = "StartOfBattle",
  StartOfTurn = "StartOfTurn",
  Buy = "Buy",
  BuyFood = "BuyFood",
  BeforeAttack = "BeforeAttack",
  Hurt = "Hurt",
  EndOfTurn = "EndOfTurn",
  AfterAttack = "AfterAttack",
  EatsShopFood = "EatsShopFood",
  // ...
}

type Target = SimpleTarget | NTarget;

type SimpleTarget = {
  kind:
    | "Self"
    | "All"
    | "EachFriend"
    | "LeftMostFriend"
    | "RightMostFriend"
    | "EachShopAnimal"
    | "TriggeringEntity"
    | "None";
  condition?: "Ahead" | "Behind";
};

type NTarget = {
  kind: "FriendAhead" | "FriendBehind" | "RandomFriend" | "RandomEnemy";
  n: number;
};

type Effect =
  | ModifyStatsEffect
  | DealDamageEffect
  | SummonPetEffect
  | GainGoldEffect
  | TransferStatsEffect
  | MultipleEffects
  | ApplyStatusEffect;

interface ModifyStatsEffect {
  kind: "ModifyStats";
  target: Target;
  attackAmount?: number;
  healthAmount?: number;
  untilEndOfBattle: boolean;
}

interface DealDamageEffect {
  kind: "DealDamage";
  target: Target;
  amount: number;
}

interface TransferStatsEffect {
  kind: "TransferStats";
  from: Target;
  to: Target;
  copyAttack: boolean;
  copyHealth: boolean;
}

interface SummonPetEffect {
  kind: "SummonPet";
  pet: Pet;
}

interface GainGoldEffect {
  kind: "GainGold";
  amount: number;
}

interface MultipleEffects {
  kind: "OneOf" | "AllOf";
  effects: Effect[];
}

interface ApplyStatusEffect {
  kind: "ApplyStatus";
  status: StatusEffect;
  to: Target;
}

// TODO: Status Effects.
interface StatusEffect {
  name: "Weak";
}

function antAbility(level: number): Ability {
  return {
    description: `Faint: Give a random friend +${level * 2}/+${level}`,
    trigger: Trigger.Faint,
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

const ant: Pet = {
  name: "Ant",
  tier: 1,
  baseAttack: 2,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: antAbility(1),
  level2Ability: antAbility(2),
  level3Ability: antAbility(3),
};

function beaverAbility(level: number): Ability {
  return {
    description: `Sell: Give two random friends +${level} health`,
    trigger: Trigger.Sell,
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

const beaver: Pet = {
  name: "Beaver",
  tier: 1,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: beaverAbility(1),
  level2Ability: beaverAbility(2),
  level3Ability: beaverAbility(3),
};

function beetleAbility(level: number): Ability {
  return {
    description: `Eat shop food: Give shop animals +${level} health`,
    trigger: Trigger.EatsShopFood,
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

const beetle: Pet = {
  name: "Beetle",
  tier: 1,
  baseAttack: 2,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: beetleAbility(1),
  level2Ability: beetleAbility(2),
  level3Ability: beetleAbility(3),
};

function bluebirdAbility(level: number): Ability {
  return {
    description: `End turn: Give left-most friend +${level} attack`,
    trigger: Trigger.EndOfTurn,
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

const bluebird: Pet = {
  name: "Bluebird",
  tier: 1,
  baseAttack: 2,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: bluebirdAbility(1),
  level2Ability: bluebirdAbility(2),
  level3Ability: bluebirdAbility(3),
};

const cricketSummoned: Pet = {
  name: "Cricket",
  tier: 1,
  baseAttack: -1,
  baseHealth: -1,
};

function cricketAbility(level: number): Ability {
  return {
    description: `Faint: Summon a ${level}/${level} Cricket`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: {
        ...cricketSummoned,
        baseAttack: level,
        baseHealth: level,
      },
    },
  };
}

const cricket: Pet = {
  name: "Cricket",
  tier: 1,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: cricketAbility(1),
  level2Ability: cricketAbility(2),
  level3Ability: cricketAbility(3),
};

function duckAbility(level: number): Ability {
  return {
    description: `Sell: Give shop animals +${level}/+${level}`,
    trigger: Trigger.Sell,
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

const duck: Pet = {
  name: "Duck",
  tier: 1,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: duckAbility(1),
  level2Ability: duckAbility(2),
  level3Ability: duckAbility(3),
};

function fishAbility(level: number): Ability {
  return {
    description: `Level-up: Give all friends +${level}/+${level}`,
    trigger: Trigger.LevelUp,
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

const fish: Pet = {
  name: "Fish",
  tier: 1,
  baseAttack: 2,
  baseHealth: 3,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: fishAbility(1),
  level2Ability: fishAbility(2),
};

function horseAbility(level: number): Ability {
  return {
    description: `Friend summoned: Give it +${level} Attack until end of battle`,
    trigger: Trigger.Summoned,
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

const horse: Pet = {
  name: "Horse",
  tier: 1,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["StandardPack"],
  level1Ability: horseAbility(1),
  level2Ability: horseAbility(2),
  level3Ability: horseAbility(3),
};

function ladybugAbility(level: number): Ability {
  return {
    description: `Buy food: Gain +${level}/+${level} until end of battle`,
    trigger: Trigger.BuyFood,
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

const ladybug: Pet = {
  name: "Ladybug",
  tier: 1,
  baseAttack: 1,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: ladybugAbility(1),
  level2Ability: ladybugAbility(2),
  level3Ability: ladybugAbility(3),
};

function mosquitoAbility(level: number): Ability {
  return {
    description: `Start of battle: Deal ${level} damage to a random enemy`,
    trigger: Trigger.StartOfBattle,
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

const mosquito: Pet = {
  name: "Mosquito",
  tier: 1,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: mosquitoAbility(1),
  level2Ability: mosquitoAbility(2),
  level3Ability: mosquitoAbility(3),
};

function otterAbility(level: number): Ability {
  return {
    description: `Buy: Give a random friend +${level}/+${level}`,
    trigger: Trigger.Buy,
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

const otter: Pet = {
  name: "Otter",
  tier: 1,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: otterAbility(1),
  level2Ability: otterAbility(2),
  level3Ability: otterAbility(3),
};

function pigAbility(level: number): Ability {
  return {
    description: `Sell: Gain an extra ${level} gold`,
    trigger: Trigger.Sell,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "GainGold",
      amount: level,
    },
  };
}

const pig: Pet = {
  name: "Pig",
  tier: 1,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: pigAbility(1),
  level2Ability: pigAbility(2),
  level3Ability: pigAbility(3),
};

function batAbility(level: number): Ability {
  return {
    description: `Start of battle: Make ${level} enemies Weak.`,
    trigger: Trigger.StartOfBattle,
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

const bat: Pet = {
  name: "Bat",
  tier: 2,
  baseAttack: 1,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: {
    ...batAbility(1),
    description: "Start of battle: Make 1 enemy Weak.",
  },
  level2Ability: batAbility(2),
  level3Ability: batAbility(3),
};

function crabAbility(level: number): Ability {
  return {
    description: `Start of battle: Copy Health from friend ahead.`,
    trigger: Trigger.StartOfBattle,
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

const crab: Pet = {
  name: "Crab",
  tier: 2,
  baseAttack: 3,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: crabAbility(1),
  level2Ability: crabAbility(2),
  level3Ability: crabAbility(3),
};

function dodoAbility(level: number): Ability {
  return {
    description: `Start of battle: Give Attack to ${level} friends ahead.`,
    trigger: Trigger.StartOfBattle,
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

const dodo: Pet = {
  name: "Dodo",
  tier: 2,
  baseAttack: 1,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: {
    ...dodoAbility(1),
    description: `Start of battle: Give Attack to friend ahead.`,
  },
  level2Ability: dodoAbility(2),
  level3Ability: dodoAbility(3),
};

function dogAbility(level: number): Ability {
  return {
    description: `Friend summoned: Gain +${level} Attack or +${level} Health.`,
    trigger: Trigger.StartOfBattle,
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

const dog: Pet = {
  name: "Dog",
  tier: 2,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: dogAbility(1),
  level2Ability: dogAbility(2),
  level3Ability: dogAbility(3),
};

function dromedaryAbility(level: number): Ability {
  return {
    description: `Start of turn: Give shop animals +${level}/+${level}`,
    trigger: Trigger.StartOfTurn,
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

const dromedary: Pet = {
  name: "Dromedary",
  tier: 2,
  baseAttack: 2,
  baseHealth: 4,
  packs: ["ExpansionPack1"],
  level1Ability: dromedaryAbility(1),
  level2Ability: dromedaryAbility(2),
  level3Ability: dromedaryAbility(3),
};

function elephantAbility(level: number): Ability {
  return {
    description: `Before Attack: Deal 1 damage to ${level} friends behind.`,
    trigger: Trigger.BeforeAttack,
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

const elephant: Pet = {
  name: "Elephant",
  tier: 2,
  baseAttack: 3,
  baseHealth: 5,
  packs: ["StandardPack"],
  level1Ability: elephantAbility(1),
  level2Ability: elephantAbility(2),
  level3Ability: elephantAbility(3),
};

function flamingoAbility(level: number): Ability {
  return {
    description: `Faint: Give the two friends behind +${level}/+${level}.`,
    trigger: Trigger.Faint,
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

const flamingo: Pet = {
  name: "Flamingo",
  tier: 2,
  baseAttack: 3,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: flamingoAbility(1),
  level2Ability: flamingoAbility(2),
  level3Ability: flamingoAbility(3),
};

function hedgehogAbility(level: number): Ability {
  return {
    description: `Faint: Deal ${level * 2} damage to all.`,
    trigger: Trigger.Faint,
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

const hedgehog: Pet = {
  name: "Hedgehog",
  tier: 2,
  baseAttack: 3,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: hedgehogAbility(1),
  level2Ability: hedgehogAbility(2),
  level3Ability: hedgehogAbility(3),
};

function peacockAbility(level: number): Ability {
  return {
    description: `Hurt: Gain ${level * 2} Attack.`,
    trigger: Trigger.Hurt,
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

const peacock: Pet = {
  name: "Peacock",
  tier: 2,
  baseAttack: 3,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: peacockAbility(1),
  level2Ability: peacockAbility(2),
  level3Ability: peacockAbility(3),
};

const dirtyRatSummoned: Pet = {
  name: "Cricket",
  tier: 1,
  baseAttack: 1,
  baseHealth: 1,
  // TODO: Represent random attacks?
};

function ratAbility(level: number): Ability {
  return {
    description: `Faint: summon one ${level}/${level} Dirty Rat for the opponent that betrays him.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: dirtyRatSummoned,
    },
  };
}

const rat: Pet = {
  name: "Rat",
  tier: 2,
  baseAttack: 4,
  baseHealth: 5,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: ratAbility(1),
  level2Ability: ratAbility(2),
  level3Ability: ratAbility(3),
};

function shrimpAbility(level: number): Ability {
  return {
    description: `Friend sold: Give a random friend +${level} Health.`,
    trigger: Trigger.Sell,
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

const shrimp: Pet = {
  name: "Shrimp",
  tier: 2,
  baseAttack: 2,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: shrimpAbility(1),
  level2Ability: shrimpAbility(2),
  level3Ability: shrimpAbility(3),
};

function spiderAbility(level: number): Ability {
  return {
    description: `Faint: Summon one tier 3 animal as a ${level}/${level}.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "SummonPet",
      pet: {
        // TODO: Summon correct pet.
        ...cricketSummoned,
        baseAttack: level * 2,
        baseHealth: level * 2,
      },
    },
  };
}

const spider: Pet = {
  name: "Spider",
  tier: 2,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: spiderAbility(1),
  level2Ability: spiderAbility(2),
  level3Ability: spiderAbility(3),
};

function swanAbility(level: number): Ability {
  return {
    description: `Start of turn: Gain 1 gold.`,
    trigger: Trigger.StartOfTurn,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "GainGold",
      amount: level,
    },
  };
}

const swan: Pet = {
  name: "Swan",
  tier: 2,
  baseAttack: 3,
  baseHealth: 4,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: swanAbility(1),
  level2Ability: swanAbility(2),
  level3Ability: swanAbility(3),
};

function tabbyCatAbility(level: number): Ability {
  return {
    description: `Eats shop food: Give friends +${level} Attack until end of battle`,
    trigger: Trigger.EatsShopFood,
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

const tabbyCat: Pet = {
  name: "Tabby Cat",
  tier: 2,
  baseAttack: 4,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: tabbyCatAbility(1),
  level2Ability: tabbyCatAbility(2),
  level3Ability: tabbyCatAbility(3),
};

const pets: Pet[] = [
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
  // badger,
  // blowfish,
  // camel,
  // giraffe,
  // kangaroo,
  // ox,
  // rabbit,
  // sheep,
  // snail,
  // turtle,
  // whale,
];

export function getPets(): Pet[] {
  return pets;
}

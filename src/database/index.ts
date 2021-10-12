type Pack = "StandardPack" | "ExpansionPack1";

export interface Pet {
  name: String;
  tier: number;
  baseAttack: number;
  baseHp: number;
  packs?: Pack[];
  level1Ability?: Ability;
  level2Ability?: Ability;
  level3Ability?: Ability;
}

export interface Ability {
  description: string;
  // What behaviour (by the trigger entity) will initiate the ability.
  trigger: Trigger;
  // Which entity will trigger the effect.
  triggeredBy: Target;
  // How many times the effect is applied.
  times: number;
  // What the effect does.
  effect: Effect[];
}

const enum Trigger {
  Faint = "Faint",
  Sell = "Sell",
  LevelUp = "LevelUp",
  Summoned = "Summoned",
  StartOfBattle = "StartOfBattle",
  Buy = "Buy",
  BuyFood = "BuyFood",
  BeforeAttack = "BeforeAttack",
  Hurt = "Hurt",
  EndOfTurn = "EndOfTurn",
  AfterAttack = "AfterAttack",
  EatsShopFood = "EatsShopFood",
  // ...
}

type Target = {
  kind:
    | "Self"
    | "RandomFriend"
    | "RandomEnemy"
    | "EachFriend"
    | "LeftMostFriend"
    | "RightMostFriend"
    | "EachShopAnimal"
    | "TriggeringEntity"
    | "None";
  condition?: "Ahead" | "Behind";
};

type Effect = ModifyStatsEffect | SummonPetEffect | GainGoldEffect;

interface ModifyStatsEffect {
  kind: "ModifyStats";
  target: Target;
  attackAmount?: number;
  healthAmount?: number;
  duration: "UntilEndOfBattle" | "Permanent" | "UntilEndOfPhase";
}

interface SummonPetEffect {
  kind: "SummonPet";
  pet: Pet;
}

interface GainGoldEffect {
  kind: "GainGold";
  amount: number;
}

function antAbility(level: number): Ability {
  return {
    description: `Faint: Give a random friend +${level * 2}/+${level}`,
    trigger: Trigger.Faint,
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

const ant: Pet = {
  name: "Ant",
  tier: 1,
  baseAttack: 2,
  baseHp: 1,
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

const beaver: Pet = {
  name: "Beaver",
  tier: 1,
  baseAttack: 2,
  baseHp: 2,
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

const beetle: Pet = {
  name: "Beetle",
  tier: 1,
  baseAttack: 2,
  baseHp: 3,
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

const bluebird: Pet = {
  name: "Bluebird",
  tier: 1,
  baseAttack: 2,
  baseHp: 3,
  packs: ["ExpansionPack1"],
  level1Ability: bluebirdAbility(1),
  level2Ability: bluebirdAbility(2),
  level3Ability: bluebirdAbility(3),
};

const cricketSummoned: Pet = {
  name: "Cricket",
  tier: 1,
  baseAttack: -1,
  baseHp: -1,
};

function cricketAbility(level: number): Ability {
  return {
    description: `Faint: Summon a ${level}/${level} Cricket`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    times: 1,
    effect: [
      {
        kind: "SummonPet",
        pet: {
          ...cricketSummoned,
          baseAttack: level,
          baseHp: level,
        },
      },
    ],
  };
}

const cricket: Pet = {
  name: "Cricket",
  tier: 1,
  baseAttack: 1,
  baseHp: 2,
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

const duck: Pet = {
  name: "Duck",
  tier: 1,
  baseAttack: 1,
  baseHp: 2,
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

const fish: Pet = {
  name: "Fish",
  tier: 1,
  baseAttack: 2,
  baseHp: 3,
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

const horse: Pet = {
  name: "Horse",
  tier: 1,
  baseAttack: 1,
  baseHp: 1,
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

const ladybug: Pet = {
  name: "Ladybug",
  tier: 1,
  baseAttack: 1,
  baseHp: 3,
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

const mosquito: Pet = {
  name: "Mosquito",
  tier: 1,
  baseAttack: 2,
  baseHp: 2,
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

const otter: Pet = {
  name: "Otter",
  tier: 1,
  baseAttack: 1,
  baseHp: 2,
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
    times: 1,
    effect: [
      {
        kind: "GainGold",
        amount: level,
      },
    ],
  };
}

const pig: Pet = {
  name: "Pig",
  tier: 1,
  baseAttack: 2,
  baseHp: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: pigAbility(1),
  level2Ability: pigAbility(2),
  level3Ability: pigAbility(3),
};

const pets: Pet[] = [
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

export function getPets(): Pet[] {
  return pets;
}

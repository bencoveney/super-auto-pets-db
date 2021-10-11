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

enum Trigger {
  "Faint",
  "Sell",
  "LevelUp",
  "Summoned",
  "StartOfBattle",
  "Buy",
  "BeforeAttack",
  "Hurt",
  "EndOfTurn",
  "AfterAttack",
  "EatsShopFood",
  // ...
}

type Target = {
  kind:
    | "Self"
    | "RandomFriend"
    | "RandomEnemy"
    | "EachFriend"
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

const ant: Pet = {
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

const beaver: Pet = {
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

const cricketSummoned: Pet = {
  name: "Cricket",
  tier: 1,
  baseAttack: -1,
  baseHp: -1,
};

const cricket: Pet = {
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
        pet: {
          ...cricketSummoned,
          baseAttack: 1,
          baseHp: 1,
        },
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
        pet: {
          ...cricketSummoned,
          baseAttack: 2,
          baseHp: 2,
        },
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
        pet: {
          ...cricketSummoned,
          baseAttack: 3,
          baseHp: 3,
        },
      },
    ],
  },
};

const duck: Pet = {
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

const fish: Pet = {
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

const horse: Pet = {
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
  packs: ["StandardPack"],
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
  packs: ["StandardPack"],
  level1Ability: pigAbility(1),
  level2Ability: pigAbility(2),
  level3Ability: pigAbility(3),
};

const pets: Pet[] = [
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

export function getPets(): Pet[] {
  return pets;
}

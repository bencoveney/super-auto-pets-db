import { sanitiseName } from "../utils";
import { apple } from "./food/apple";
import { cannedFood } from "./food/cannedFood";
import { chili } from "./food/chili";
import { chocolate } from "./food/chocolate";
import { cupcake } from "./food/cupcake";
import { garlic } from "./food/garlic";
import { beeSummoned, honey } from "./food/honey";
import { meatBone } from "./food/meatBone";
import { melon } from "./food/melon";
import { milk } from "./food/milk";
import { mushroom } from "./food/mushroom";
import { pear } from "./food/pear";
import { pizza } from "./food/pizza";
import { saladBowl } from "./food/saladBowl";
import { sleepingPill } from "./food/sleepingPill";
import { steak } from "./food/steak";
import { sushi } from "./food/sushi";
import { ant } from "./pets/ant";
import { badger } from "./pets/badger";
import { bat } from "./pets/bat";
import { beaver } from "./pets/beaver";
import { beetle } from "./pets/beetle";
import { bison } from "./pets/bison";
import { blowfish } from "./pets/blowfish";
import { bluebird } from "./pets/bluebird";
import { buffalo } from "./pets/buffalo";
import { camel } from "./pets/camel";
import { cat } from "./pets/cat";
import { butterfly, caterpillar } from "./pets/caterpillar";
import { chicken } from "./pets/chicken";
import { cow } from "./pets/cow";
import { crab } from "./pets/crab";
import { cricket, cricketSummoned } from "./pets/cricket";
import { crocodile } from "./pets/crocodile";
import { busSummoned, deer } from "./pets/deer";
import { dodo } from "./pets/dodo";
import { dog } from "./pets/dog";
import { dolphin } from "./pets/dolphin";
import { dragon } from "./pets/dragon";
import { dromedary } from "./pets/dromedary";
import { duck } from "./pets/duck";
import { eagle } from "./pets/eagle";
import { elephant } from "./pets/elephant";
import { fish } from "./pets/fish";
import { flamingo } from "./pets/flamingo";
import { fly, flySummoned } from "./pets/fly";
import { giraffe } from "./pets/giraffe";
import { goat } from "./pets/goat";
import { gorilla } from "./pets/gorilla";
import { hatchingChick } from "./pets/hatchingChick";
import { hedgehog } from "./pets/hedgehog";
import { hippo } from "./pets/hippo";
import { horse } from "./pets/horse";
import { kangaroo } from "./pets/kangaroo";
import { ladybug } from "./pets/ladybug";
import { leopard } from "./pets/leopard";
import { llama } from "./pets/llama";
import { lobster } from "./pets/lobster";
import { mammoth } from "./pets/mammoth";
import { microbe } from "./pets/microbe";
import { monkey } from "./pets/monkey";
import { mosquito } from "./pets/mosquito";
import { octopus } from "./pets/octopus";
import { otter } from "./pets/otter";
import { owl } from "./pets/owl";
import { ox } from "./pets/ox";
import { parrot } from "./pets/parrot";
import { peacock } from "./pets/peacock";
import { penguin } from "./pets/penguin";
import { pig } from "./pets/pig";
import { poodle } from "./pets/poodle";
import { puppy } from "./pets/puppy";
import { rabbit } from "./pets/rabbit";
import { dirtyRatSummoned, rat } from "./pets/rat";
import { rhino } from "./pets/rhino";
import { chick, rooster } from "./pets/rooster";
import { sauropod } from "./pets/sauropod";
import { scorpion } from "./pets/scorpion";
import { seal } from "./pets/seal";
import { shark } from "./pets/shark";
import { ramSummoned, sheep } from "./pets/sheep";
import { shrimp } from "./pets/shrimp";
import { skunk } from "./pets/skunk";
import { sloth } from "./pets/sloth";
import { snail } from "./pets/snail";
import { snake } from "./pets/snake";
import { spider } from "./pets/spider";
import { squirrel } from "./pets/squirrel";
import { swan } from "./pets/swan";
import { tabbyCat } from "./pets/tabbyCat";
import { tiger } from "./pets/tiger";
import { tropicalFish } from "./pets/tropicalFish";
import { turkey } from "./pets/turkey";
import { turtle } from "./pets/turtle";
import { tyrannosaurus } from "./pets/tyrannosaurus";
import { whale } from "./pets/whale";
import { worm } from "./pets/worm";

export type Pack = "StandardPack" | "ExpansionPack1" | "EasterEgg";

export type Tier = 1 | 2 | 3 | 4 | 5 | 6 | "Summoned";

export type Stat = number | "?";

export interface Pet extends HasImage, Filterable {
  // The name of the pet.
  name: string;
  notes?: string;
  // The tier the food appears in.
  tier: Tier;
  // The standard starting attack points for the pet.
  baseAttack: Stat;
  // The standard starting health points for the pet.
  baseHealth: Stat;
  // Which packs the pet appears in.
  packs?: Pack[];
  // The ability the pet has at level 1.
  level1Ability?: Ability;
  // The ability the pet has at level 2.
  level2Ability?: Ability;
  // The ability the pet has at level 3.
  level3Ability?: Ability;
  status?: StatusEffect;
}

export interface Food extends HasImage, Filterable {
  // The name of the food.
  name: string;
  notes?: string;
  // The tier the food appears in.
  tier: Tier;
  // Which packs the food appears in.
  packs?: Pack[];
  // The ability the food item has.
  ability: Ability;
}

export interface Status extends HasImage, Filterable {
  // The name of the status.
  name: string;
  // The ability the status item has.
  ability: Ability;
}

export interface HasImage {
  name: string;
  image: EmojiImage;
}

export interface Filterable {
  name: string;
  packs?: Pack[];
}

export type EmojiImage = NotoEmojiImage | FxEmojiImage | TwEmojiImage;

export type NotoEmojiImage = {
  source: "noto-emoji";
  // Unicode codepoint
  unicodeCodePoint: string;
};

export type FxEmojiImage = {
  source: "fxemoji";
  name: string;
  // Unicode codepoint
  unicodeCodePoint: string;
};

export type TwEmojiImage = {
  source: "twemoji";
  // Unicode codepoint
  unicodeCodePoint: string;
};

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

// TODO: const enum https://github.com/evanw/esbuild/issues/128
export const enum Trigger {
  Faint = "Faint",
  Sell = "Sell",
  LevelUp = "LevelUp",
  Summoned = "Summoned",
  // TODO: Often requires a target, but doesn't need one.
  StartOfBattle = "StartOfBattle",
  // TODO: Often requires a target, but doesn't need one.
  StartOfTurn = "StartOfTurn",
  Buy = "Buy",
  // TODO: Probably should represent this as a condition somehow.
  BuyAfterLoss = "BuyAfterLoss",
  // TODO: Probably should represent this as a condition somehow.
  BuyTier1Animal = "BuyTier1Animal",
  // TODO: Often requires a target, but doesn't need one.
  BuyFood = "BuyFood",
  BeforeAttack = "BeforeAttack",
  Hurt = "Hurt",
  // TODO: Often requires a target, but doesn't need one.
  EndOfTurn = "EndOfTurn",
  // TODO: Often requires a target, but doesn't need one.
  // TODO: Probably should represent this as a condition somehow.
  EndOfTurnWith2PlusGold = "EndOfTurnWith2PlusGold",
  // TODO: Often requires a target, but doesn't need one.
  // TODO: Probably should represent this as a condition somehow.
  EndOfTurnWith3PlusGold = "EndOfTurnWith3PlusGold",
  // TODO: Often requires a target, but doesn't need one.
  // TODO: Probably should represent this as a condition somehow.
  EndOfTurnWithLvl3Friend = "EndOfTurnWithLvl3Friend",
  // TODO: Often requires a target, but doesn't need one.
  // TODO: Probably should represent this as a condition somehow.
  EndOfTurnWith4OrLessAnimals = "EndOfTurnWith4OrLessAnimals",
  AfterAttack = "AfterAttack",
  EatsShopFood = "EatsShopFood",
  KnockOut = "KnockOut",
  CastsAbility = "CastsAbility",
  // Status Triggers
  WhenAttacking = "WhenAttacking",
  WhenDamaged = "WhenDamaged",
  // ...
}

export type Target = SimpleTarget | NTarget | ShopTarget;

export type SimpleTarget = {
  kind:
    | "Self"
    | "All"
    | "EachFriend"
    | "EachEnemy"
    | "LeftMostFriend"
    | "RightMostFriend"
    | "TriggeringEntity"
    | "AdjacentAnimals"
    | "AdjacentFriends"
    | "Level2And3Friends"
    | "FirstEnemy"
    | "LastEnemy"
    | "LowestHealthEnemy"
    | "HighestHealthEnemy"
    | "DifferentTierAnimals"
    | "PurchaseTarget"
    | "None";
};

export type NTarget = {
  kind: "FriendAhead" | "FriendBehind" | "RandomFriend" | "RandomEnemy";
  n: number;
};

export type ShopTarget = {
  kind: "EachShopAnimal";
  includingFuture: boolean;
};

export type Effect =
  | ModifyStatsEffect
  | DealDamageEffect
  | SummonPetEffect
  | GainGoldEffect
  | GainExperienceEffect
  | TransferStatsEffect
  | TransferAbilityEffect
  | GainAbilityEffect
  | MultipleEffects
  | ApplyStatusEffect
  | SwallowEffect
  | EvolveEffect
  | ReduceHealthEffect
  | RefillShopsEffect
  | FoodMultiplierEffect
  | RepeatAbilityEffect
  | FaintEffect
  | SummonRandomPetEffect
  | RespawnPetEffect
  | ModifyDamageEffect
  | SplashDamageEffect;

export interface ModifyStatsEffect {
  kind: "ModifyStats";
  target: Target;
  attackAmount?: number;
  healthAmount?: number;
  untilEndOfBattle: boolean;
}

export interface DealDamageEffect {
  kind: "DealDamage";
  target: Target;
  amount: number | { attackDamagePercent: number };
}

export interface TransferStatsEffect {
  kind: "TransferStats";
  from: Target;
  to: Target;
  copyAttack: boolean;
  copyHealth: boolean;
}

export interface TransferAbilityEffect {
  kind: "TransferAbility";
  from: Target;
  to: Target;
  level: number;
}

export interface GainAbilityEffect {
  // TODO: Figure out how to represent gained ability.
  kind: "GainAbility";
  target: Target;
}

export interface SummonPetEffect {
  kind: "SummonPet";
  pet: Pet;
  team: "Friendly" | "Enemy";
}

export interface SummonRandomPetEffect {
  kind: "SummonRandomPet";
  tier: Tier;
  baseAttack?: number;
  baseAealth?: number;
  level?: number;
}

export interface RespawnPetEffect {
  kind: "RespawnPet";
  baseAttack?: number;
  baseHealth?: number;
  level?: number;
}

export interface GainGoldEffect {
  kind: "GainGold";
  amount: number;
}

export interface GainExperienceEffect {
  kind: "GainExperience";
  target: Target;
  amount: number;
}

export interface MultipleEffects {
  kind: "OneOf" | "AllOf";
  effects: Effect[];
}

export interface ApplyStatusEffect {
  kind: "ApplyStatus";
  // TODO: Status effects can probably represented as a string.
  status: StatusEffect;
  to: Target;
}

export interface SwallowEffect {
  kind: "Swallow";
  target: Target;
}

// For status effects
export interface ModifyDamageEffect {
  kind: "ModifyDamage";
  // Positive is an increase to damage dealt.
  damageModifier: number;
  appliesOnce: boolean;
}

export interface SplashDamageEffect {
  kind: "SplashDamage";
  amount: number;
}

export interface StatusEffect {
  name:
    | "Weak"
    | "CoconutShield"
    | "HoneyBee"
    | "BoneAttack"
    | "GarlicArmor"
    | "SplashAttack"
    | "MelonArmor"
    | "ExtraLife"
    | "SteakAttack"
    | "PoisinAttack";
}

export interface EvolveEffect {
  kind: "Evolve";
  // TODO: Evolve Effect.
}

export interface RefillShopsEffect {
  kind: "RefillShops";
  shop: "All" | "Food";
  food: "Any" | "Milk";
}

export interface ReduceHealthEffect {
  kind: "ReduceHealth";
  target: Target;
  percentage: number;
}

export interface FoodMultiplierEffect {
  kind: "FoodMultiplier";
  amount: number;
}

export interface RepeatAbilityEffect {
  kind: "RepeatAbility";
  target: Target;
}

export interface FaintEffect {
  kind: "Faint";
  target: Target;
}

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
  sloth,
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
  // Tier 4
  bison,
  buffalo,
  deer,
  dolphin,
  hippo,
  llama,
  lobster,
  monkey,
  penguin,
  poodle,
  rooster,
  skunk,
  squirrel,
  worm,
  // Tier 5
  chicken,
  cow,
  crocodile,
  eagle,
  goat,
  microbe,
  parrot,
  rhino,
  scorpion,
  seal,
  shark,
  turkey,
  // Tier 6
  cat,
  dragon,
  fly,
  gorilla,
  leopard,
  mammoth,
  octopus,
  sauropod,
  snake,
  tiger,
  tyrannosaurus,
  // Summoned
  cricketSummoned,
  busSummoned,
  flySummoned,
  dirtyRatSummoned,
  chick,
  ramSummoned,
  butterfly,
  beeSummoned,
];

const foods: Food[] = [
  // Tier 1
  apple,
  honey,
  // Tier 2
  cupcake,
  meatBone,
  sleepingPill,
  // Tier 3
  garlic,
  saladBowl,
  // Tier 4
  cannedFood,
  pear,
  // Tier 5
  chili,
  chocolate,
  sushi,
  // Tier 6
  melon,
  mushroom,
  pizza,
  steak,
  // Summoned
  milk,
];

const statuses: Status[] = [
  {
    name: "Weak",
    image: {
      source: "noto-emoji",
      unicodeCodePoint: "\u{1F9A0}",
    },
    ability: {
      description: "Take 5 extra damage.",
      triggeredBy: {
        kind: "Self",
      },
      trigger: Trigger.WhenDamaged,
      effect: {
        kind: "ModifyDamage",
        damageModifier: 5,
        appliesOnce: false,
      },
    },
  },
  {
    name: "Coconut Shield",
    image: { source: "twemoji", unicodeCodePoint: "\u{1F965}" },
    ability: {
      description: "Ignore damage once.",
      triggeredBy: {
        kind: "Self",
      },
      trigger: Trigger.WhenDamaged,
      effect: {
        kind: "ModifyDamage",
        damageModifier: -Infinity,
        appliesOnce: true,
      },
    },
  },
  {
    name: "Honey Bee",
    image: {
      source: "twemoji",
      unicodeCodePoint: "\u{1F36F}",
    },
    ability: {
      description: "Ignore damage once.",
      triggeredBy: {
        kind: "Self",
      },
      trigger: Trigger.Faint,
      effect: {
        kind: "SummonPet",
        pet: beeSummoned,
        team: "Friendly",
      },
    },
  },
  {
    name: "Bone Attack",
    image: {
      source: "twemoji",
      unicodeCodePoint: "\u{1F356}",
    },
    ability: {
      description: "Attack for 5 more damage.",
      triggeredBy: {
        kind: "Self",
      },
      trigger: Trigger.WhenAttacking,
      effect: {
        kind: "ModifyDamage",
        damageModifier: 5,
        appliesOnce: false,
      },
    },
  },
  {
    name: "Garlic Armor",
    image: {
      source: "twemoji",
      unicodeCodePoint: "\u{1F9C4}",
    },
    ability: {
      description: "Take 2 less damage.",
      triggeredBy: {
        kind: "Self",
      },
      trigger: Trigger.WhenDamaged,
      effect: {
        kind: "ModifyDamage",
        damageModifier: -2,
        appliesOnce: false,
      },
    },
  },
  {
    name: "Splash Attack",
    image: {
      source: "twemoji",
      unicodeCodePoint: "\u{1F336}",
    },
    ability: {
      description: "Attack second enemy for 5 damage.",
      triggeredBy: {
        kind: "Self",
      },
      trigger: Trigger.WhenAttacking,
      effect: {
        kind: "SplashDamage",
        amount: 5,
      },
    },
  },
  {
    name: "Melon Armor",
    image: {
      source: "twemoji",
      unicodeCodePoint: "\u{1F348}",
    },
    ability: {
      description: "Take 20 damage less, once.",
      triggeredBy: {
        kind: "Self",
      },
      trigger: Trigger.WhenDamaged,
      effect: {
        kind: "ModifyDamage",
        damageModifier: -20,
        appliesOnce: true,
      },
    },
  },
  {
    name: "Extra Life",
    image: {
      source: "twemoji",
      unicodeCodePoint: "\u{1F344}",
    },
    ability: {
      description: "Come back as a 1/1 after fainting",
      triggeredBy: {
        kind: "Self",
      },
      trigger: Trigger.Faint,
      effect: {
        kind: "RespawnPet",
        baseAttack: 1,
        baseHealth: 1,
      },
    },
  },
  {
    name: "Steak Attack",
    image: {
      source: "twemoji",
      unicodeCodePoint: "\u{1F969}",
    },
    ability: {
      description: "Attack for 20 more damage, once.",
      triggeredBy: {
        kind: "Self",
      },
      trigger: Trigger.WhenAttacking,
      effect: {
        kind: "ModifyDamage",
        damageModifier: 20,
        appliesOnce: true,
      },
    },
  },
  {
    name: "Poison Attack",
    image: { source: "noto-emoji", unicodeCodePoint: "\u{1F95C}" },
    ability: {
      description: "Knock out any animal hit by this.",
      triggeredBy: {
        kind: "Self",
      },
      trigger: Trigger.WhenAttacking,
      effect: {
        kind: "ModifyDamage",
        damageModifier: Infinity,
        appliesOnce: false,
      },
    },
  },
];

export type WithId<T> = T & { id: string };

export type Table<T> = { [id: string]: WithId<T> };

export interface Database {
  pets: Table<Pet>;
  foods: Table<Food>;
  statuses: Table<Status>;
}

export function getDatabase(): Database {
  let database: Database = { pets: {}, foods: {}, statuses: {} };
  pets.forEach((pet) => {
    const id = getPetId(pet);
    database.pets[id] = { ...pet, id };
  });
  foods.forEach((food) => {
    const id = getFoodId(food);
    database.foods[id] = { ...food, id };
  });
  statuses.forEach((status) => {
    const id = getStatusId(status);
    database.statuses[id] = { ...status, id };
  });
  return database;
}

export function serialiseDatabase(db: Database): string {
  return JSON.stringify(db, null, 2);
}

export function deserialiseDatabase(content: string): Database {
  return JSON.parse(content);
}

export function getPetId(pet: Pet | string) {
  let name = typeof pet == "string" ? pet : pet.name;
  return `pet_${sanitiseName(name)}`;
}

export function getPetUrl(pet: Pet) {
  return `/pet/${sanitiseName(pet.name)}`;
}

export function getFoodId(food: Food | string) {
  let name = typeof food == "string" ? food : food.name;
  return `food_${sanitiseName(name)}`;
}

export function getFoodUrl(food: Food) {
  return `/food/${sanitiseName(food.name)}`;
}

export function getStatusId(status: Status | string) {
  let name = typeof status == "string" ? status : status.name;
  return `status_${sanitiseName(name)}`;
}

export function getStatusUrl(status: Status) {
  return `/status/${sanitiseName(status.name)}`;
}

export function enumerateTable<T>(table: Table<T>): WithId<T>[] {
  return Object.entries(table).map((it) => it[1]);
}

export function yoinkId<T>(without: T): string {
  return (without as WithId<T>).id;
}

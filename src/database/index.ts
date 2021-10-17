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
import { caterpillar } from "./pets/caterpillar";
import { chicken } from "./pets/chicken";
import { cow } from "./pets/cow";
import { crab } from "./pets/crab";
import { cricket } from "./pets/cricket";
import { crocodile } from "./pets/crocodile";
import { deer } from "./pets/deer";
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
import { fly } from "./pets/fly";
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
import { rat } from "./pets/rat";
import { rhino } from "./pets/rhino";
import { rooster } from "./pets/rooster";
import { sauropod } from "./pets/sauropod";
import { scorpion } from "./pets/scorpion";
import { seal } from "./pets/seal";
import { shark } from "./pets/shark";
import { sheep } from "./pets/sheep";
import { shrimp } from "./pets/shrimp";
import { skunk } from "./pets/skunk";
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

export type Pack = "StandardPack" | "ExpansionPack1";

export interface Pet {
  // The name of the pet.
  name: String;
  // The tier the pet appears in.
  tier: 1 | 2 | 3 | 4 | 5 | 6 | "Summoned";
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
  | RepeatAbilityEffect;

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

// TODO: Status Effects.
export interface StatusEffect {
  name: "Weak" | "MelonArmor" | "CoconutShield";
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
];

export function getPets(): Pet[] {
  return pets;
}

// const food: Food[] = [
//   // Tier 1
//   // Apple: Give an animal +1/+1.
//   // Honey: Give an animal Honey Bee.
//   // Tier 2
//   // Cupcake: Give an animal +3/+3 until end of battle.
//   // Meat Bone: Give an animal Bone Attack.
//   // Sleeping Pill: Make a friendly animal faint.
//   // Tier 3
//   // Garlic: Give an animal Garlic Armor.
//   // Salad Bowl: Give 2 random animals +1/+1.
//   // Tier 4
//   // Canned Food: Give all current and future shop animals +2/+2.
//   // Pear: Give an animal +2/+2.
//   // Tier 5
//   // Chili: Give an animal Splash Attack.
//   // Chocolate: Give an animal +1 Experience.
//   // Sushi: Give 3 random animals +1/+1.
//   // Tier 6
//   // Melon: Give an animal Melon Armor.
//   // Mushroom: Give an animal Extra Life.
//   // Pizza: Give 2 random animals +2/+2.
//   // Steak: Give an animal Steak Attack.
// ];

// export function getFood(): Food[] {
//   return food;
// }

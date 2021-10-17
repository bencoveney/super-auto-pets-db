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
import { dromedary } from "./pets/dromedary";
import { duck } from "./pets/duck";
import { eagle } from "./pets/eagle";
import { elephant } from "./pets/elephant";
import { fish } from "./pets/fish";
import { flamingo } from "./pets/flamingo";
import { giraffe } from "./pets/giraffe";
import { goat } from "./pets/goat";
import { hatchingChick } from "./pets/hatchingChick";
import { hedgehog } from "./pets/hedgehog";
import { hippo } from "./pets/hippo";
import { horse } from "./pets/horse";
import { kangaroo } from "./pets/kangaroo";
import { ladybug } from "./pets/ladybug";
import { llama } from "./pets/llama";
import { lobster } from "./pets/lobster";
import { microbe } from "./pets/microbe";
import { monkey } from "./pets/monkey";
import { mosquito } from "./pets/mosquito";
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
import { scorpion } from "./pets/scorpion";
import { seal } from "./pets/seal";
import { shark } from "./pets/shark";
import { sheep } from "./pets/sheep";
import { shrimp } from "./pets/shrimp";
import { skunk } from "./pets/skunk";
import { snail } from "./pets/snail";
import { spider } from "./pets/spider";
import { squirrel } from "./pets/squirrel";
import { swan } from "./pets/swan";
import { tabbyCat } from "./pets/tabbyCat";
import { tropicalFish } from "./pets/tropicalFish";
import { turkey } from "./pets/turkey";
import { turtle } from "./pets/turtle";
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
  StartOfBattle = "StartOfBattle",
  StartOfTurn = "StartOfTurn",
  Buy = "Buy",
  // TODO: Probably should represent this as a condition somehow.
  BuyAfterLoss = "BuyAfterLoss",
  // TODO: Probably should represent this as a condition somehow.
  BuyTier1Animal = "BuyTier1Animal",
  BuyFood = "BuyFood",
  BeforeAttack = "BeforeAttack",
  Hurt = "Hurt",
  EndOfTurn = "EndOfTurn",
  // TODO: Probably should represent this as a condition somehow.
  EndOfTurnWith2PlusGold = "EndOfTurnWith2PlusGold",
  // TODO: Probably should represent this as a condition somehow.
  EndOfTurnWithLvl3Friend = "EndOfTurnWithLvl3Friend",
  // TODO: Probably should represent this as a condition somehow.
  EndOfTurnWith4OrLessAnimals = "EndOfTurnWith4OrLessAnimals",
  AfterAttack = "AfterAttack",
  EatsShopFood = "EatsShopFood",
  KnockOut = "KnockOut",
  // ...
}

export type Target = SimpleTarget | NTarget | ShopTarget;

export type SimpleTarget = {
  kind:
    | "Self"
    | "All"
    | "EachFriend"
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
  | MultipleEffects
  | ApplyStatusEffect
  | SwallowEffect
  | EvolveEffect
  | ReduceHealthEffect
  | RefillShopsEffect;

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
  amount: number | "AttackDamage";
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
  name: "Weak" | "MelonArmor";
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
  // // Tier 6
  // // cat,
  // dragon,
  // fly,
  // gorilla,
  // leopard,
  // mammoth,
  // // octopus,
  // // sauropod,
  // snake,
  // tiger,
  // // tyrannosaurus,
];

export function getPets(): Pet[] {
  return pets;
}

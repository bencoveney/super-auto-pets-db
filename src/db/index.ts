import { PetRef, StatusRef, FoodRef, TurnRef } from "./database";

export type Pack = "StandardPack" | "ExpansionPack1" | "EasterEgg";

export type Tier = 1 | 2 | 3 | 4 | 5 | 6 | "Summoned";

export type Stat = number | "?";

export interface Pet
  extends Identifiers,
    HasImage,
    Filterable,
    AppearanceProbabilities,
    AppearsInTier {
  id: PetRef;
  notes?: string;
  // The standard starting attack points for the pet.
  baseAttack: Stat;
  // The standard starting health points for the pet.
  baseHealth: Stat;
  // The ability the pet has at level 1.
  level1Ability?: Ability;
  // The ability the pet has at level 2.
  level2Ability?: Ability;
  // The ability the pet has at level 3.
  level3Ability?: Ability;
  status?: StatusRef;
}

export interface Food
  extends Identifiers,
    HasImage,
    Filterable,
    AppearanceProbabilities,
    AppearsInTier {
  id: FoodRef;
  notes?: string;
  // The ability the food item has.
  ability: Ability;
  // The cost of the item (if not 3).
  cost?: number;
}

export interface Status extends Identifiers, HasImage {
  id: StatusRef;
  name: string;
  // The ability the status item has.
  ability: Ability;
}

export interface Turn extends Identifiers {
  id: TurnRef;
  index: number;
  tiersAvailable: Tier;
  levelUpTier: Tier;
  animalShopSlots: number;
  foodShopSlots: number;
}

export type Identifiers = {
  name: string;
  id: string;
};

export interface HasImage {
  name: string;
  image: EmojiImage;
}

export interface Filterable extends AppearsInPacks {
  name: string;
}

export interface AppearsInPacks {
  packs: Pack[];
}

export interface AppearsInTier {
  tier: Tier;
}

export type EmojiImage = NotoEmojiImage | FxEmojiImage | TwEmojiImage;

export type NotoEmojiImage = {
  source: "noto-emoji";
  commit: string;
  // Unicode codepoint
  unicodeCodePoint: string;
};

export type FxEmojiImage = {
  source: "fxemoji";
  commit: string;
  name: string;
  // Unicode codepoint
  unicodeCodePoint: string;
};

export type TwEmojiImage = {
  source: "twemoji";
  commit: string;
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
  // How many times the ability will be triggered - if a limit exists.
  maxTriggers?: number;
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
  // TODO: Doesn't trigger when taking zero damage.
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
    | "Player"
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
    | "StrongestFriend"
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
  // TODO: only lasts for 1 turn.
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
  pet: PetRef;
  withAttack?: Stat;
  withHealth?: Stat;
  team: "Friendly" | "Enemy";
}

export interface SummonRandomPetEffect {
  kind: "SummonRandomPet";
  tier: Tier;
  baseAttack?: number;
  baseHealth?: number;
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
  status: StatusRef;
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

export interface EvolveEffect {
  // TODO: Evolve Effect. Summoned butterfly is a 1/1 lvl.1, then the ability copies health.
  kind: "Evolve";
  into: PetRef;
}

export interface RefillShopsEffect {
  kind: "RefillShops";
  shop: "All" | "Food";
  food: "Any" | FoodRef;
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

export type By<Key extends string | number | symbol, Value> = {
  [key in Key]: Value;
};
export type ByTier<T> = By<Tier, T>;
export type ByPack<T> = By<Pack, T>;

export interface AppearanceProbabilities {
  probabilities?: Array<AnyProbability>;
}

export type AnyProbability =
  | ShopProbability
  | SummonProbability
  | LevelUpProbability;

export interface ShopProbability extends Probability {
  kind: "shop";
  perShop: ByPack<number>;
  perSlot: ByPack<number>;
}

export interface SummonProbability extends Probability {
  kind: "summon";
  fromPet: PetRef;
  petSlot: ByPack<number>;
}

export interface LevelUpProbability extends Probability {
  kind: "levelup";
  perSlot: ByPack<number>;
}

export interface Probability {
  kind: string;
  turn: TurnRef;
}

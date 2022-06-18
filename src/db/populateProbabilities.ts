import {
  AppearsInPacks,
  Identifiers,
  ShopProbability,
  SummonProbability,
  LevelUpProbability,
  AppearanceProbabilities,
  AppearsInTier,
  Tier,
  Turn,
  Pack,
  ByTier,
  By,
  ByPack,
} from ".";
import { Database, enumerateTable, Table, TurnRef } from "./database";

type ContributesToProbs = AppearsInPacks & Identifiers & AppearsInTier;
export type HasProbabilities = ContributesToProbs & AppearanceProbabilities;

export function populateProbabilities(database: Database) {
  const turns = enumerateTable(database.turns);

  const pets = getRelevantEntities(database.pets);
  const petsGrouped = mapGroup(
    filterGroup(groupByPack(pets), (key) => key !== "EasterEgg"),
    groupByTier
  );

  pets.forEach((pet) => {
    const relevantPetsGrouped = filterGroup(petsGrouped, (pack) =>
      pet.packs.includes(pack)
    );
    pet.probabilities = [
      ...getShopProbabilities(
        pet,
        relevantPetsGrouped,
        turns,
        "animalShopSlots"
      ),
      ...getLevelUpProbabilities(pet, relevantPetsGrouped, turns),
    ];
  });

  const foods = getRelevantEntities(database.foods);
  const foodsGrouped = mapGroup(
    filterGroup(groupByPack(foods), (key) => key !== "EasterEgg"),
    groupByTier
  );

  foods.forEach((food) => {
    const relevantFoodsGrouped = filterGroup(foodsGrouped, (pack) =>
      food.packs.includes(pack)
    );
    food.probabilities = [
      ...getShopProbabilities(
        food,
        relevantFoodsGrouped,
        turns,
        "foodShopSlots"
      ),
    ];
  });
}

function getShopProbabilities<T extends HasProbabilities>(
  entity: T,
  byPackAndTier: By<Pack, ByTier<T[]>>,
  turns: Turn[],
  slotsAvailable: keyof Turn
): ShopProbability[] {
  return turns
    .filter((turn) => turn.tiersAvailable >= entity.tier)
    .map<ShopProbability>((turn): ShopProbability => {
      const availableByPack = mapGroup(byPackAndTier, (byTier) => {
        const tiersAvailable = filterGroup(
          byTier,
          // TODO: Tiers are numbers, but have been transformed to strings when adding/removing from objects.
          // TODO: Make sure its a safe assumption we aren't going to get "summoned"
          (tier) => turn.tiersAvailable >= parseInt(tier as string)
        );
        return flatten(tiersAvailable).length;
      });
      return {
        kind: "shop",
        turn: turn.id,
        perShop: mapGroup(
          availableByPack,
          (available) =>
            1 -
            Math.pow(
              (available - 1) / available,
              turn[slotsAvailable] as number
            )
        ),
        perSlot: mapGroup(availableByPack, (available) => 1 / available),
      };
    });
}

function getSummonProbabilities<T extends ContributesToProbs>(
  entity: T,
  byPackAndTier: By<Pack, ByTier<T[]>>,
  turns: Turn[]
): SummonProbability[] {
  return [];
}

function getLevelUpProbabilities<T extends ContributesToProbs>(
  entity: T,
  byPackAndTier: By<Pack, ByTier<T[]>>,
  turns: Turn[]
): LevelUpProbability[] {
  return turns
    .filter((turn) => turn.levelUpTier === entity.tier)
    .map<LevelUpProbability>((turn) => {
      return {
        kind: "levelup",
        turn: turn.id,
        perSlot: mapGroup(
          byPackAndTier,
          (byTier) => 1 / byTier[turn.levelUpTier].length
        ),
      };
    });
}

function getRelevantEntities<T extends ContributesToProbs>(
  table: Table<T>
): T[] {
  return enumerateTable(table).filter(
    (entity) =>
      entity.tier !== "Summoned" && !entity.packs.includes("EasterEgg")
  );
}

function groupByPack<T extends AppearsInPacks>(entities: T[]): ByPack<T[]> {
  return entities.reduce<ByPack<T[]>>((prev, next) => {
    next.packs.forEach((pack) => {
      if (!prev[pack]) {
        prev[pack] = [] as T[];
      }
      prev[pack].push(next);
    });
    return prev;
  }, {} as ByPack<T[]>);
}

function groupByTier<T extends AppearsInTier>(entities: T[]): ByTier<T[]> {
  return entities.reduce<ByTier<T[]>>((prev, next) => {
    if (!prev[next.tier]) {
      prev[next.tier] = [] as T[];
    }
    prev[next.tier].push(next);
    return prev;
  }, {} as ByTier<T[]>);
}

function mapGroup<T, Key extends string | number | symbol, Value>(
  group: By<Key, T>,
  transform: (it: T) => Value
): By<Key, Value> {
  return Object.fromEntries(
    Object.entries(group).map(([key, value]) => {
      const transformed = transform(value as any);
      return [key, transformed];
    })
  ) as any;
}

function filterGroup<T, Key extends string | number | symbol>(
  group: By<Key, T>,
  check: (key: Key, it: T) => boolean
): By<Key, T> {
  return Object.fromEntries(
    Object.entries(group).filter(([key, value]) =>
      check(key as any, value as any)
    )
  ) as any;
}

function flatten<T, Key extends string | number | symbol>(
  group: By<Key, T[]>
): T[] {
  return Object.entries(group).flatMap(([_, value]) => value as T[]) || [];
}

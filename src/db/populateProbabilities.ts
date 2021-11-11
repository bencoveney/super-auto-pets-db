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
type HasProbabilities = ContributesToProbs & AppearanceProbabilities;

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
      ...getShopProbabilities(pet, relevantPetsGrouped, turns),
    ];
  });

  const foods = getRelevantEntities(database.foods);
}

function getShopProbabilities<T extends HasProbabilities>(
  entity: T,
  byPackAndTier: By<Pack, ByTier<T[]>>,
  turns: Turn[]
): ShopProbability[] {
  return turns
    .filter((turn) => turn.tiersAvailable >= entity.tier)
    .map<ShopProbability>((turn): ShopProbability => {
      const animalsAvailableByPack = mapGroup(byPackAndTier, (byTier) => {
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
        pack: "StandardPack",
        perShop: mapGroup(
          animalsAvailableByPack,
          (animalsAvailable) =>
            1 -
            Math.pow(
              (animalsAvailable - 1) / animalsAvailable,
              turn.animalShopSlots
            )
        ),
        perSlot: mapGroup(
          animalsAvailableByPack,
          (animalsAvailable) => 1 / animalsAvailable
        ),
      };
    });
}

function getSummonProbabilities(
  entity: HasProbabilities,
  others: ByTier<ContributesToProbs[]>,
  turns: Table<Turn>
): SummonProbability[] {
  return [];
}

function getLevelUpProbabilities(
  entity: HasProbabilities,
  others: ByTier<ContributesToProbs[]>,
  turns: Table<Turn>
): LevelUpProbability[] {
  return [];
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

import React from "react";
import {
  Pet,
  Pack as PackType,
  Food,
  Tier as TierType,
  Filterable,
} from "../../db";
import { Database, enumerateTable } from "../../db/database";
import { Blurb } from "./Blurb";
import { Breadcrumbs } from "./Breadcrumbs";
import { Header } from "./Header";
import { Tier } from "./Tier";
import { Filters, useFilters } from "./Filters";

const allPacks: PackType[] = ["StandardPack", "ExpansionPack1"];

const allTiers: { tier: TierType; availableOnTurn?: number }[] = [
  { tier: 1, availableOnTurn: 1 },
  { tier: 2, availableOnTurn: 3 },
  { tier: 3, availableOnTurn: 5 },
  { tier: 4, availableOnTurn: 7 },
  { tier: 5, availableOnTurn: 9 },
  { tier: 6, availableOnTurn: 11 },
  { tier: "Summoned" },
];

export function Homepage(props: { database: Database }) {
  const [filters, setName, togglePack] = useFilters();

  let filteredPets = applyFilter(
    enumerateTable(props.database.pets),
    filters.packs,
    filters.name
  );
  let filteredFoods = applyFilter(
    enumerateTable(props.database.foods),
    filters.packs,
    filters.name
  );
  const tiers = allTiers
    .map(({ tier, availableOnTurn }) => ({
      tier,
      availableOnTurn,
      pets: filteredPets.filter((pet) => pet.tier == tier),
      foods: filteredFoods.filter((food) => food.tier == tier),
    }))
    .filter((tier) => tier.pets.length > 0 || tier.foods.length > 0);

  return (
    <>
      <Header>
        <Breadcrumbs {...props} />
        <Filters filters={filters} setName={setName} togglePack={togglePack} />
      </Header>
      {tiers.map((tier) => (
        <Tier key={tier.tier} {...tier} />
      ))}
      <Blurb />
    </>
  );
}

function applyFilter<T extends Filterable>(
  all: T[],
  packsFilter: PackType[],
  nameFilter: string
): T[] {
  let filtered = all.filter((it) =>
    it.packs?.some((pack) => packsFilter.includes(pack))
  );
  if (nameFilter) {
    let sanitisedNameFilter = nameFilter.toLowerCase();
    filtered = filtered.filter(
      (pet) => pet.name.toLowerCase().indexOf(sanitisedNameFilter) != -1
    );
  }
  return filtered;
}

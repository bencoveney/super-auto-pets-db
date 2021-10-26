import React from "react";
import {
  Pet,
  Pack as PackType,
  Food,
  Tier as TierType,
  Filterable,
  Database,
  enumerateTable,
} from "../../database";
import { Blurb } from "./Blurb";
import { Breadcrumbs } from "./Breadcrumbs";
import { Header } from "./Header";
import { Tier } from "./Tier";
import { Filters, useFilters } from "./Filters";

const allPacks: PackType[] = ["StandardPack", "ExpansionPack1"];

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
  const tiers = ([1, 2, 3, 4, 5, 6, "Summoned"] as TierType[])
    .map((tier) => ({
      tier: tier,
      pets: filteredPets.filter((pet) => pet.tier == tier),
      food: filteredFoods.filter((food) => food.tier == tier),
    }))
    .filter((tier) => tier.pets.length > 0 || tier.food.length > 0);

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

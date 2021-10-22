import React, { useState } from "react";
import { Pet, Pack as PackType, Food, Filterable } from "../../database";
import { Blurb } from "./Blurb";
import { List } from "./List";
import { Pack } from "./Pack";

const allPacks: PackType[] = ["StandardPack", "ExpansionPack1"];

export function Homepage(props: { pets: Pet[]; food: Food[] }) {
  const [packsFilter, setPacksFilter] = useState<PackType[]>(allPacks);
  const [nameFilter, setNameFilter] = useState<string>("");
  let filteredPets = applyFilter(props.pets, packsFilter, nameFilter);
  let filteredFood = applyFilter(props.food, packsFilter, nameFilter);
  const tiers = [1, 2, 3, 4, 5, 6]
    .map((tier) => ({
      tier: tier,
      pets: filteredPets.filter((pet) => pet.tier == tier),
      food: filteredFood.filter((food) => food.tier == tier),
    }))
    .filter((tier) => tier.pets.length > 0 || tier.food.length > 0);
  return (
    <>
      <div className="p-3 flex flex-col lg:flex-row justify-between items-center">
        <h1 className="text-2xl font-medium">Super Auto Pets Database</h1>
        <div className="flex flex-col md:flex-row items-center">
          <input
            type="search"
            className="bg-gray-900 shadow rounded border-0 p-1"
            placeholder="Search by name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <div>
            <span className="p-3">Include Packs:</span>
            {allPacks.map((pack, index) => (
              <a
                onClick={() => {
                  if (packsFilter.includes(pack)) {
                    setPacksFilter(packsFilter.filter((it) => it != pack));
                  } else {
                    setPacksFilter(packsFilter.concat(pack));
                  }
                }}
                key={index}
              >
                <Pack pack={pack} colored={packsFilter.includes(pack)} />
              </a>
            ))}
          </div>
        </div>
      </div>
      {tiers.map((tier) => (
        <div key={tier.tier} className="py-3">
          <h2 className="px-3 text-xl font-medium">Tier {tier.tier}</h2>
          <List pets={tier.pets} food={tier.food} />
        </div>
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

import React, { useState } from "react";
import { Pet, Pack as PackType } from "../../database";
import { Blurb } from "./Blurb";
import { List } from "./List";
import { Pack } from "./Pack";

const allPacks: PackType[] = ["StandardPack", "ExpansionPack1"];

export function Homepage(props: { pets: Pet[] }) {
  const [packsFilter, setPacksFilter] = useState<PackType[]>(allPacks);
  const filteredPets = props.pets.filter((pet) =>
    pet.packs?.some((pack) => packsFilter.includes(pack))
  );
  const tiers = [1, 2, 3, 4, 5, 6].map((tier) =>
    filteredPets.filter((pet) => pet.tier == tier)
  );
  return (
    <>
      <div className="p-3 flex flex-col md:flex-row justify-between">
        <h1 className="text-2xl font-medium">Super Auto Pets Database</h1>
        <div>
          <span className="p-3">Filter Packs:</span>
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
      {tiers.map((tier, index) => (
        <div key={index} className="py-3">
          <h2 className="px-3 text-xl font-medium">Tier {index + 1}</h2>
          <List pets={tier} />
        </div>
      ))}
      <Blurb />
    </>
  );
}

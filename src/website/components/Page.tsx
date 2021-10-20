import React from "react";
import { Pet } from "../../database";
import { Blurb } from "./Blurb";
import { List } from "./List";

export function Page(props: { pets: Pet[] }) {
  const tiers = [1, 2, 3, 4, 5, 6].map((tier) =>
    props.pets.filter((pet) => pet.tier == tier)
  );
  return (
    <>
      <h1 className="p-3 text-2xl font-medium">Super Auto Pets Database</h1>
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

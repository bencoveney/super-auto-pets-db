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
      {tiers.map((tier, index) => (
        <div key={index}>
          <h2 className="p-6">Tier {index + 1}</h2>
          <List pets={tier} />
        </div>
      ))}
      <Blurb />
    </>
  );
}

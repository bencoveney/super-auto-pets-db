import React from "react";
import { Pet } from "../../database";
import { Pet as PetElement } from "./Pet";

export function List(props: { pets: Pet[] }) {
  return (
    <div className="grid grid-cols-list gap-4 m-4 justify-items-stretch">
      {props.pets.map((pet, index) => (
        <PetElement key={index} pet={pet} />
      ))}
    </div>
  );
}

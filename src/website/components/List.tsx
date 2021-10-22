import React from "react";
import { Food, Pet } from "../../database";
import { Pet as PetElement } from "./Pet";
import { Food as FoodElement } from "./Food";

export function List(props: { pets: Pet[]; food: Food[] }) {
  return (
    <div className="grid grid-cols-list gap-4 m-4 justify-items-stretch">
      {props.pets.map((pet, index) => (
        <PetElement key={`pet${index}`} pet={pet} />
      ))}
      {props.food.map((food, index) => (
        <FoodElement key={`food${index}`} food={food} />
      ))}
    </div>
  );
}

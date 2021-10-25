import React from "react";
import { Link } from "react-router-dom";
import { Food, getFoodUrl, getPetUrl, Pet, WithId } from "../../database";
import { Tile } from "./Tile";

export function Tiles(props: { pets: WithId<Pet>[]; food: WithId<Food>[] }) {
  const tiles = props.pets
    .map((pet, index) => <PetTile key={`pet${index}`} pet={pet} />)
    .concat(
      props.food.map((food, index) => (
        <FoodTile key={`food${index}`} food={food} />
      ))
    );
  return (
    <div className="grid grid-cols-tiles gap-4 m-4 justify-items-stretch">
      {tiles}
    </div>
  );
}

function FoodTile(props: { food: WithId<Food> }) {
  return (
    <Link to={getFoodUrl(props.food)}>
      <Tile
        id={props.food.id}
        name={props.food.name}
        background="bgimage-4"
        packs={props.food.packs || []}
      />
    </Link>
  );
}

function PetTile(props: { pet: WithId<Pet> }) {
  return (
    <Link to={getPetUrl(props.pet)}>
      <Tile
        id={props.pet.id}
        name={props.pet.name}
        background="bgimage-1"
        packs={props.pet.packs || []}
        stats={{ attack: props.pet.baseAttack, health: props.pet.baseHealth }}
      />
    </Link>
  );
}

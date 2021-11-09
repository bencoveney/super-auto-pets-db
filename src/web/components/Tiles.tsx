import React from "react";
import { Link } from "react-router-dom";
import { Food, Pet } from "../../db";
import { getFoodUrl, getPetUrl } from "../../db/database";
import { Tile } from "./Tile";

export function Tiles(props: {
  pets: Pet[];
  foods: Food[];
  deferImages: boolean;
}) {
  const tiles = props.pets
    .map((pet, index) => (
      <PetTile key={`pet${index}`} pet={pet} deferImage={props.deferImages} />
    ))
    .concat(
      props.foods.map((food, index) => (
        <FoodTile
          key={`food${index}`}
          food={food}
          deferImage={props.deferImages}
        />
      ))
    );
  return (
    <div className="grid grid-cols-tiles gap-4 m-4 justify-items-stretch">
      {tiles}
    </div>
  );
}

function FoodTile(props: { food: Food; deferImage: boolean }) {
  return (
    <Link to={getFoodUrl(props.food)}>
      <Tile
        id={props.food.id}
        name={props.food.name}
        background="bgimage-4"
        packs={props.food.packs || []}
        deferImage={props.deferImage}
      />
    </Link>
  );
}

function PetTile(props: { pet: Pet; deferImage: boolean }) {
  return (
    <Link to={getPetUrl(props.pet)}>
      <Tile
        id={props.pet.id}
        name={props.pet.name}
        background="bgimage-1"
        packs={props.pet.packs || []}
        stats={{ attack: props.pet.baseAttack, health: props.pet.baseHealth }}
        deferImage={props.deferImage}
      />
    </Link>
  );
}

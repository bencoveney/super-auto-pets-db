import React from "react";
import { Pet as PetType, Food as FoodType } from "../../database";
import { Breadcrumbs } from "./Breadcrumbs";
import { Food } from "./Food";
import { Header } from "./Header";

export function FoodPage(props: {
  theFood: FoodType;
  pets: PetType[];
  food: FoodType[];
}) {
  return (
    <>
      <Header>
        <Breadcrumbs {...props} />
      </Header>
      <Food food={props.theFood} />
    </>
  );
}

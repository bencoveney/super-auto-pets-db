import React from "react";
import { Pet as PetType, Food as FoodType } from "../../database";
import { Breadcrumbs } from "./Breadcrumbs";
import { Header } from "./Header";
import { Pet } from "./Pet";

export function PetPage(props: {
  pet: PetType;
  pets: PetType[];
  food: FoodType[];
}) {
  return (
    <>
      <Header>
        <Breadcrumbs {...props} />
      </Header>
      <Pet pet={props.pet} />
    </>
  );
}

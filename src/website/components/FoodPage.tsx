import React from "react";
import { Food as FoodType, Database, WithId } from "../../database";
import { Breadcrumbs } from "./Breadcrumbs";
import { Food } from "./Food";
import { Header } from "./Header";

export function FoodPage(props: {
  theFood: WithId<FoodType>;
  database: Database;
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

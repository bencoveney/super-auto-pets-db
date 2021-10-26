import React from "react";
import { Food as FoodType } from "../../database";
import { Database } from "../../database/database";
import { Breadcrumbs } from "./Breadcrumbs";
import { Food } from "./Food";
import { Header } from "./Header";

export function FoodPage(props: { theFood: FoodType; database: Database }) {
  return (
    <>
      <Header>
        <Breadcrumbs {...props} />
      </Header>
      <Food food={props.theFood} />
    </>
  );
}

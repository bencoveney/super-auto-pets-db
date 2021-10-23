import React from "react";
import { Link } from "react-router-dom";
import { Food as FoodType } from "../../database";
import { Food } from "./Food";

export function FoodPage(props: { food: FoodType }) {
  return (
    <>
      <Link to="/">Home</Link>
      <Food food={props.food} />
    </>
  );
}

// Use the generated API.json
// We use const enums but they break esbuild.
// https://github.com/evanw/esbuild/issues/128
import * as api from "../../../docs/api.json";
import { Food, Pet } from "../../database";
// As another consequence, cast to any to avoid TypeScript errors when changing API structure.
const pets = (api as any).pets as Pet[];
const food = (api as any).food as Food[];

import React from "react";
import ReactDOM from "react-dom";
import { Homepage } from "../components/Homepage";
import { BrowserRouter, Route, RouteComponentProps } from "react-router-dom";
import { PetPage } from "../components/PetPage";
import { sanitiseName } from "../../utils";
import { FoodPage } from "../components/FoodPage";

const reactRoot = document.getElementById("react-root");
if (!reactRoot) {
  throw new Error("Could not find react root");
}

function PetPageWrapper(props: RouteComponentProps<{ petName: string }>) {
  const petName = sanitiseName(props.match.params.petName);
  const pet = pets.find((it) => sanitiseName(it.name) == petName);
  if (!pet) {
    throw new Error(`Could not find pet ${petName}`);
  }
  return <PetPage pet={pet} pets={pets} food={food} />;
}

function FoodPageWrapper(props: RouteComponentProps<{ foodName: string }>) {
  const foodName = sanitiseName(props.match.params.foodName);
  const theFood = food.find((it) => sanitiseName(it.name) == foodName);
  if (!theFood) {
    throw new Error(`Could not find ${foodName}`);
  }
  return <FoodPage theFood={theFood} pets={pets} food={food} />;
}

ReactDOM.hydrate(
  <BrowserRouter>
    <Route exact path="/">
      <Homepage pets={pets as any} food={food}></Homepage>
    </Route>
    <Route exact path="/pet/:petName" component={PetPageWrapper} />
    <Route exact path="/food/:foodName" component={FoodPageWrapper} />
  </BrowserRouter>,
  reactRoot
);

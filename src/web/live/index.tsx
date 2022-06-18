// Use the generated API.json
// We use const enums but they break esbuild.
// https://github.com/evanw/esbuild/issues/128
import * as api from "../../../docs/api.json";
import { Database, getFoodId, getPetId } from "../../db/database";
// As another consequence, cast to any to avoid TypeScript errors when changing API structure.
const database = api as any as Database;

import React from "react";
import ReactDOM from "react-dom";
import { Homepage } from "../components/Homepage";
import { BrowserRouter, Route, RouteComponentProps } from "react-router-dom";
import { PetPage } from "../components/PetPage";
import { FoodPage } from "../components/FoodPage";
import { getFoodPageTitle, getHomepageTitle, getPetPageTitle, useTitle } from "../hooks/usePageTitle";
import * as Panelbear from "@panelbear/panelbear-js";

const reactRoot = document.getElementById("react-root");
if (!reactRoot) {
  throw new Error("Could not find react root");
}

function HomepageWrapper(props: RouteComponentProps<{}>) {
  useTitle(getHomepageTitle());
  return <Homepage database={database} />;
}

function PetPageWrapper(props: RouteComponentProps<{ petName: string }>) {
  const name = getPetId(props.match.params.petName);
  const pet = database.pets[name];
  if (!pet) {
    throw new Error(`Could not find pet ${name}`);
  }
  useTitle(getPetPageTitle(pet));
  return <PetPage pet={pet} database={database} />;
}

function FoodPageWrapper(props: RouteComponentProps<{ foodName: string }>) {
  const name = getFoodId(props.match.params.foodName);
  const food = database.foods[name];
  if (!food) {
    throw new Error(`Could not find ${name}`);
  }
  useTitle(getFoodPageTitle(food));
  return <FoodPage food={food} database={database} />;
}

ReactDOM.hydrate(
  <BrowserRouter>
    <Route exact path="/" component={HomepageWrapper} />
    <Route exact path="/pet/:petName" component={PetPageWrapper} />
    <Route exact path="/food/:foodName" component={FoodPageWrapper} />
  </BrowserRouter>,
  reactRoot
);

Panelbear.load("Kxep3xnqhgA", {
  debug: false,
  enabled: true,
  honorDNT: true,
  autoTrack: true,
  spaMode: "history",
  includeURLFragment: false,
});

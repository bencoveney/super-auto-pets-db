import React from "react";
import { Link, Route, RouteComponentProps } from "react-router-dom";
import {
  Database,
  getFoodId,
  getFoodUrl,
  getPetId,
  getPetUrl,
} from "../../db/database";

function PetBreadbrumb(
  props: RouteComponentProps<{ petName: string }> & { database: Database }
) {
  const name = getPetId(props.match.params.petName);
  const pet = props.database.pets[name];
  if (!pet) {
    throw new Error(`Could not find pet ${name}`);
  }
  return <Breadbrumb name={pet.name} target={getPetUrl(pet)} />;
}

function FoodBreadbrumb(
  props: RouteComponentProps<{ foodName: string }> & { database: Database }
) {
  const name = getFoodId(props.match.params.foodName);
  const food = props.database.foods[name];
  if (!food) {
    throw new Error(`Could not find ${name}`);
  }
  return <Breadbrumb name={food.name} target={getFoodUrl(food)} />;
}

function Breadbrumb(props: { name: string; target: string }) {
  return (
    <>
      <span className="text-blue-500 font-bold inline-block mx-3">
        {" // "}
      </span>
      <Link className="hover:text-blue-300" to={props.target}>
        {props.name}
      </Link>
    </>
  );
}

export function Breadcrumbs(props: { database: Database }) {
  return (
    <h1 className="text-2xl font-light">
      <Route path="/">
        📚{" "}
        <Link className="hover:text-blue-300" to="/">
          Super Auto Pets List
        </Link>
      </Route>
      <Route
        exact
        path="/pet/:petName"
        render={(routeProps: RouteComponentProps<{ petName: string }>) => (
          <PetBreadbrumb {...routeProps} database={props.database} />
        )}
      />
      <Route
        exact
        path="/food/:foodName"
        render={(routeProps: RouteComponentProps<{ foodName: string }>) => (
          <FoodBreadbrumb {...routeProps} database={props.database} />
        )}
      />
    </h1>
  );
}

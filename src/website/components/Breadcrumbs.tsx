import React, { ReactElement } from "react";
import { Link, Route, RouteComponentProps } from "react-router-dom";
import { Food, Pet } from "../../database";
import { sanitiseName } from "../../utils";

function PetBreadbrumb(
  props: RouteComponentProps<{ petName: string }> & { pets: Pet[] }
) {
  const petName = sanitiseName(props.match.params.petName);
  const pet = props.pets.find((it) => sanitiseName(it.name) == petName);
  if (!pet) {
    throw new Error(`Could not find pet ${petName}`);
  }
  return (
    <Breadbrumb name={pet.name} target={`/pet/${props.match.params.petName}`} />
  );
}

function FoodBreadbrumb(
  props: RouteComponentProps<{ foodName: string }> & { food: Food[] }
) {
  const foodName = sanitiseName(props.match.params.foodName);
  const theFood = props.food.find((it) => sanitiseName(it.name) == foodName);
  if (!theFood) {
    throw new Error(`Could not find ${foodName}`);
  }
  return (
    <Breadbrumb
      name={theFood.name}
      target={`/food/${props.match.params.foodName}`}
    />
  );
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

export function Breadcrumbs(props: { pets: Pet[]; food: Food[] }) {
  return (
    <h1 className="text-2xl font-light">
      <Route path="/">
        📚{" "}
        <Link className="hover:text-blue-300" to="/">
          Super Auto Pets Database
        </Link>
      </Route>
      <Route
        exact
        path="/pet/:petName"
        render={(routeProps: RouteComponentProps<{ petName: string }>) => (
          <PetBreadbrumb {...routeProps} pets={props.pets} />
        )}
      />
      <Route
        exact
        path="/food/:foodName"
        render={(routeProps: RouteComponentProps<{ foodName: string }>) => (
          <FoodBreadbrumb {...routeProps} food={props.food} />
        )}
      />
    </h1>
  );
}

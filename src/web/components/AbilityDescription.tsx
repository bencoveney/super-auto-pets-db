import React from "react";
import { Ability } from "../../db";

export function AbilityDescription(props: { ability?: Ability }) {
  if (!props.ability) {
    return null;
  }
  return <div>{props.ability.description}</div>;
}

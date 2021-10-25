import React from "react";
import { Ability } from "../../database";

export function AbilityDescription(props: { ability?: Ability }) {
  if (!props.ability) {
    return null;
  }
  return <div>{props.ability.description}</div>;
}

import React from "react";
import { Pet } from "../../database";
import { Blurb } from "./Blurb";
import { List } from "./List";

export function Page(props: { pets: Pet[] }) {
  return (
    <>
      <List pets={props.pets} />
      <Blurb />
    </>
  );
}

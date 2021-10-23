import React from "react";
import { Link } from "react-router-dom";
import { Pet as PetType } from "../../database";
import { Pet } from "./Pet";

export function PetPage(props: { pet: PetType }) {
  return (
    <>
      <Link to="/">Home</Link>
      <Pet pet={props.pet} />
    </>
  );
}

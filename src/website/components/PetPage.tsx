import React from "react";
import { Pet as PetType } from "../../database";
import { Database } from "../../database/database";
import { Breadcrumbs } from "./Breadcrumbs";
import { Header } from "./Header";
import { Pet } from "./Pet";

export function PetPage(props: { pet: PetType; database: Database }) {
  return (
    <>
      <Header>
        <Breadcrumbs {...props} />
      </Header>
      <Pet pet={props.pet} />
    </>
  );
}

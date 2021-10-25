import React from "react";
import { Pet as PetType, Database, WithId } from "../../database";
import { Breadcrumbs } from "./Breadcrumbs";
import { Header } from "./Header";
import { Pet } from "./Pet";

export function PetPage(props: { pet: WithId<PetType>; database: Database }) {
  return (
    <>
      <Header>
        <Breadcrumbs {...props} />
      </Header>
      <Pet pet={props.pet} />
    </>
  );
}

import React from "react";
import { Ability } from "../../db";
import { Database, PetRef } from "../../db/database";
import { SummaryPet } from "./SummaryPet";
import { SummaryStatus } from "./SummaryStatus";

export function AbilityDescription(props: {
  ability: Ability;
  pet?: PetRef;
  database: Database;
}) {
  return (
    <div>
      <p>{props.ability.description}</p>
      {props.ability.effect.kind === "ApplyStatus" ? (
        <SummaryStatus
          status={props.ability.effect.status}
          pet={props.pet}
          database={props.database}
        />
      ) : null}
      {props.ability.effect.kind === "SummonPet" ? (
        <SummaryPet
          pet={props.ability.effect.pet}
          database={props.database}
          setAttack={props.ability.effect.withAttack}
          setHealth={props.ability.effect.withHealth}
        />
      ) : null}
    </div>
  );
}

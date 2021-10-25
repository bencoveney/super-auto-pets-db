import React from "react";
import { Food as FoodType, Ability as AbilityType } from "../../database";
import { sanitiseName } from "../../utils";
import { Pack } from "./Pack";
import { Status } from "./Status";
import { Polaroid } from "./Polaroid";

export function Food(props: { food: FoodType }) {
  return (
    <div className="m-3">
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-start lg:justify-center">
        <div className="flex-grow max-w-xs w-80">
          <Polaroid name={props.food.name} background="bgimage-4" />
        </div>
        <div className="text-xl flex-grow grid grid-cols-keyvalue gap-2 max-w-4xl items-baseline">
          <SectionTitle text="Stats" />
          <RowLabel text="Name" />
          <div className="font-medium">{props.food.name}</div>
          <RowLabel text="Packs" />
          <div>
            {(props.food.packs || []).map((pack, index) => (
              <Pack pack={pack} key={index} colored={true} condensed={false} />
            ))}
          </div>
          {props.food.notes ? (
            <>
              <RowLabel text="Notes" />
              <div className="italic">{props.food.notes}</div>
            </>
          ) : null}
          <SectionTitle text="Abilities" />
          {props.food.ability ? <Ability ability={props.food.ability} /> : null}
        </div>
      </div>
    </div>
  );
}

function SectionTitle(props: { text: string }): React.ReactElement {
  return (
    <div className="col-span-2 mt-4 border-b border-gray-500 text-2xl font-light">
      {props.text}:
    </div>
  );
}

function RowLabel(props: { text: string }) {
  return <div className="font-bold text-base text-gray-300">{props.text}:</div>;
}

function Ability(props: { ability: AbilityType }) {
  return (
    <>
      <RowLabel text={"Effect"} />
      <div>{props.ability.description}</div>
      {props.ability.effect.kind == "ApplyStatus" ? (
        <>
          <RowLabel text={"Status"} />
          <Status status={props.ability.effect.status} />
        </>
      ) : null}
    </>
  );
}

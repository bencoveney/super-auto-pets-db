import React from "react";
import { Food as FoodType, Ability as AbilityType } from "../../database";
import { Pack } from "./Pack";
import { Status } from "./Status";

export function Food(props: { food: FoodType }) {
  return (
    <div className="bg-gray-700 rounded-xl shadow-md flex flex-col items-stretch justify-start">
      <div className="p-3 flex flex-row justify-between">
        <div className="text-xl font-medium">{props.food.name}</div>
      </div>
      <img
        className="mx-20"
        src={`assets/${props.food.name.toLowerCase().replace(/\s/g, "_")}.svg`}
      />
      <div className="p-3">
        {(props.food.packs || []).map((pack, index) => (
          <Pack pack={pack} key={index} colored={true} />
        ))}
      </div>
      {props.food.notes ? (
        <div className="p-3 border-t border-gray-500 text-gray-200 italic">
          {props.food.notes}
        </div>
      ) : null}
      {props.food.ability ? <Ability ability={props.food.ability} /> : null}
    </div>
  );
}

function Ability(props: { ability: AbilityType }) {
  return (
    <>
      <div className="p-3 border-t border-gray-500 text-gray-200">
        {props.ability.description}
      </div>
      {props.ability.effect.kind == "ApplyStatus" ? (
        <Status status={props.ability.effect.status} />
      ) : null}
    </>
  );
}

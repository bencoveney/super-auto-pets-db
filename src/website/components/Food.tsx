import React from "react";
import { Food as FoodType, Ability as AbilityType } from "../../database";
import { sanitiseName } from "../../utils";
import { Pack } from "./Pack";
import { Status } from "./Status";

export function Food(props: { food: FoodType }) {
  return (
    <div className="bg-gray-700 rounded-xl shadow-md flex flex-col items-stretch justify-start max-w-sm">
      <div className="p-3 flex flex-row justify-between">
        <div className="text-xl font-medium">{props.food.name}</div>
      </div>
      <img
        className="mx-20"
        src={`/assets/${sanitiseName(props.food.name)}.svg`}
      />
      <div className="p-3">
        {(props.food.packs || []).map((pack, index) => (
          <Pack pack={pack} key={index} colored={true} condensed={false} />
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

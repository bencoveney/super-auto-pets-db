import React from "react";
import { Pet as PetType, Ability as AbilityType } from "../../database";

export function Pet(props: { pet: PetType }) {
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col items-stretch justify-start">
      <div className="p-3 flex flex-row  justify-between">
        <div className="text-xl font-medium text-black">{props.pet.name}</div>
        <div className="">
          ⚔️ {props.pet.baseAttack} / 💖 {props.pet.baseHp}
        </div>
      </div>
      {props.pet.level1Ability ? (
        <Ability level={1} ability={props.pet.level1Ability} />
      ) : null}
      {props.pet.level2Ability ? (
        <Ability level={2} ability={props.pet.level2Ability} />
      ) : null}
      {props.pet.level3Ability ? (
        <Ability level={3} ability={props.pet.level3Ability} />
      ) : null}
    </div>
  );
}

function Ability(props: { level: number; ability: AbilityType }) {
  return (
    <div className="text-gray-500 p-3 border-t">
      <b>Level {props.level}:</b> {props.ability.description}
    </div>
  );
}

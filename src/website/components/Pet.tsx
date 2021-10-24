import React from "react";
import { Pet as PetType, Ability as AbilityType } from "../../database";
import { sanitiseName } from "../../utils";
import { Pack } from "./Pack";
import { Status } from "./Status";

export function Pet(props: { pet: PetType }) {
  return (
    <div className="bg-gray-900 rounded-xl shadow-md flex flex-col items-stretch justify-start max-w-sm mx-auto my-5">
      <div className="p-3 flex flex-row justify-between">
        <div className="text-xl font-medium">{props.pet.name}</div>
        <div className="">
          ⚔️ {props.pet.baseAttack} / 💖 {props.pet.baseHealth}
        </div>
      </div>
      <img
        className="mx-20"
        src={`/assets/${sanitiseName(props.pet.name)}.svg`}
      />
      <div className="p-3">
        {(props.pet.packs || []).map((pack, index) => (
          <Pack pack={pack} key={index} colored={true} condensed={false} />
        ))}
      </div>
      {props.pet.notes ? (
        <div className="p-3 border-t border-gray-700 text-gray-200 italic">
          {props.pet.notes}
        </div>
      ) : null}
      {props.pet.level1Ability ? (
        <Ability level={1} ability={props.pet.level1Ability} />
      ) : null}
      {props.pet.level2Ability ? (
        <Ability level={2} ability={props.pet.level2Ability} />
      ) : null}
      {props.pet.level3Ability ? (
        <Ability level={3} ability={props.pet.level3Ability} />
      ) : null}
      {!!props.pet.status ? <Status status={props.pet.status} /> : null}
    </div>
  );
}

function Ability(props: { level: number; ability: AbilityType }) {
  return (
    <div className="p-3 border-t border-gray-700 text-gray-200">
      {LevelLabel(props.level)} {props.ability.description}
    </div>
  );
}

function LevelLabel(level: number) {
  switch (level) {
    case 1:
      return "1️⃣";
    case 2:
      return "2️⃣";
    case 3:
      return "3️⃣";
    default:
      return "❗";
  }
}

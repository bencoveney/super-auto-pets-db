import React, { ReactElement } from "react";
import { Pet as PetType, Ability as AbilityType, Stat } from "../../database";
import { Polaroid } from "./Polaroid";
import { Pack } from "./Pack";
import { Status } from "./Status";
import { stat } from "fs";

export function Pet(props: { pet: PetType }) {
  return (
    <div className="m-3">
      <div className="flex flex-row-reverse items-stretch justify-start">
        <div className="flex-grow max-w-sm">
          <Polaroid name={props.pet.name} background="bgimage-1" />
        </div>
        <div className="text-xl flex-grow grid grid-cols-keyvalue gap-2">
          <div>Name:</div>
          <div className="font-medium">{props.pet.name}</div>
          <div>Attack:</div>
          <StatDisplay stat={props.pet.baseAttack} emoji="⚔️" />
          <div>Health:</div>
          <StatDisplay stat={props.pet.baseHealth} emoji="💖" />
          <div>Packs:</div>
          <div>
            {(props.pet.packs || []).map((pack, index) => (
              <Pack pack={pack} key={index} colored={true} condensed={false} />
            ))}
          </div>
          {props.pet.notes ? (
            <div className="col-span-2 border-t border-gray-700 text-gray-200 italic">
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
      </div>
    </div>
  );
}

function StatDisplay(props: { stat: Stat; emoji: string }): React.ReactElement {
  if (typeof props.stat == "string") {
    return <div>{props.stat}</div>;
  }

  return (
    <div>
      {props.stat} {props.emoji.repeat(props.stat)}
    </div>
  );
}

function Ability(props: { level: number; ability: AbilityType }) {
  return (
    <>
      <div>Level {props.level} Ability:</div>
      <div>
        {LevelLabel(props.level)} {props.ability.description}
      </div>
    </>
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

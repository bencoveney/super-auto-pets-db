import React, { ReactElement } from "react";
import { Pet as PetType, Ability as AbilityType, Stat } from "../../database";
import { Polaroid } from "./Polaroid";
import { Pack } from "./Pack";
import { Status } from "./Status";
import { stat } from "fs";

export function Pet(props: { pet: PetType }) {
  return (
    <div className="m-3">
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-start lg:justify-center">
        <div className="flex-grow max-w-xs w-80">
          <Polaroid name={props.pet.name} background="bgimage-1" />
        </div>
        <div className="text-xl flex-grow grid grid-cols-keyvalue gap-2 max-w-4xl items-baseline">
          <SectionTitle text="Stats" />
          <RowLabel text="Name" />
          <div className="font-medium">{props.pet.name}</div>
          <RowLabel text="Attack" />
          <StatDisplay stat={props.pet.baseAttack} emoji="⚔️" />
          <RowLabel text="Health" />
          <StatDisplay stat={props.pet.baseHealth} emoji="💖" />
          <RowLabel text="Packs" />
          <div>
            {(props.pet.packs || []).map((pack, index) => (
              <Pack pack={pack} key={index} colored={true} condensed={false} />
            ))}
          </div>
          {props.pet.notes ? (
            <>
              <RowLabel text="Notes" />
              <div className="italic">{props.pet.notes}</div>
            </>
          ) : null}
          <SectionTitle text="Abilities" />
          {props.pet.level1Ability ? (
            <Ability level={1} ability={props.pet.level1Ability} />
          ) : null}
          {props.pet.level2Ability ? (
            <Ability level={2} ability={props.pet.level2Ability} />
          ) : null}
          {props.pet.level3Ability ? (
            <Ability level={3} ability={props.pet.level3Ability} />
          ) : null}
          {!!props.pet.status ? (
            <>
              <RowLabel text={"Status"} />
              <Status status={props.pet.status} />
            </>
          ) : null}
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

function Ability(props: { level: number; ability: AbilityType }) {
  return (
    <>
      <RowLabel text={`Level ${props.level}`} />
      <div>{props.ability.description}</div>
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

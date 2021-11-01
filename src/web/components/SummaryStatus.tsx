import React from "react";
import { Database, PetRef, StatusRef } from "../../db/database";

export function SummaryStatus(props: {
  status: StatusRef;
  // TODO: unused.
  pet?: PetRef;
  database: Database;
}) {
  const status = props.database.statuses[props.status];
  const pet = props.database.pets[props.pet || "pet_sloth"];
  return (
    <div className="flex m-3 bg-gray-900">
      <div className="relative w-20">
        <div className="z-0 absolute bottom-0 left-0 top-0 right-0 bg-bgimage-2-2 bg-cover filter contrast-75 brightness-75" />
        {/* <div className="z-1 absolute bottom-0 left-0 top-0 right-0 p-3">
          <img
            className="filter contrast-75 brightness-75 w-auto h-auto"
            src={`/assets/${pet.id}.svg`}
            alt=...
            width={100}
            height={100}
          />
        </div> */}
        <div className="z-2 relative p-1">
          <img
            className="drop-shadow-tile w-auto h-auto"
            src={`/assets/${status.id}.svg`}
            alt={`A thumbnail showing what ${status.image} looks like`}
            width="100"
            height="100"
          />
        </div>
        <div className="z-3 absolute bottom-0 left-0 top-0 right-0 bg-bgimage-2-1 bg-cover filter contrast-75 brightness-75" />
      </div>
      <div className="flex-grow p-3 flex flex-col items-stretch justify-center">
        <div className="text-xl">{status.name}</div>
        <div className="text-base">{status.ability.description}</div>
      </div>
    </div>
  );
}

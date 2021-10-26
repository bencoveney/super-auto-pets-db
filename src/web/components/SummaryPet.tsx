import React from "react";
import { Link } from "react-router-dom";
import { Stat } from "../../db";
import { Database, getPetUrl, PetRef } from "../../db/database";

export function SummaryPet(props: {
  pet: PetRef;
  database: Database;
  setAttack?: Stat;
  setHealth?: Stat;
}) {
  const pet = props.database.pets[props.pet];
  const attack = props.setAttack || pet.baseAttack;
  const health = props.setHealth || pet.baseHealth;
  return (
    <Link to={getPetUrl(pet)}>
      <div className="transition group flex m-3 bg-gray-900 hover:bg-black cursor-pointer">
        <div className="relative w-20">
          <div
            className={`z-0 absolute bottom-0 left-0 top-0 right-0 bg-bgimage-2-2 bg-cover filter contrast-75 brightness-75`}
          />
          <div className="z-2 relative p-1">
            <img className="drop-shadow-tile" src={`/assets/${pet.id}.svg`} />
          </div>
          <div
            className={`z-3 absolute bottom-0 left-0 top-0 right-0 bg-bgimage-2-1 bg-cover filter contrast-75 brightness-75`}
          />
        </div>
        <div className="flex-grow p-3 flex flex-col items-stretch justify-center">
          <div className="text-xl">{pet.name}</div>
          <div className="text-base">
            ⚔️ {attack} / 💖 {health}
          </div>
        </div>
      </div>
    </Link>
  );
}

import React from "react";
import { Pack as PackType, Stat } from "../../database";
import { sanitiseName } from "../../utils";
import { Pack } from "./Pack";
import { Pet } from "./Pet";

export function Polaroid({
  name,
  background,
}: {
  name: string;
  background: string;
}) {
  return (
    <div className="bg-white shadow p-3 m-4 transform rotate-3">
      <div className="relative">
        <div
          className={`absolute bottom-0 left-0 top-0 right-0 bg-${background}-2 bg-cover`}
        />
        <div className="p-3">
          <img
            className="filter drop-shadow-tile"
            src={`/assets/${sanitiseName(name)}.svg`}
          />
        </div>
        <div
          className={`absolute bottom-0 left-0 top-0 right-0 bg-${background}-1 bg-cover`}
        />
      </div>
      <div className="text-center text-black mt-2 italic text-xl">
        My {name}!
      </div>
    </div>
  );
}

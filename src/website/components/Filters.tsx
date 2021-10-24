import React, { useCallback, useState } from "react";
import {
  Pet,
  Pack as PackType,
  Food,
  Tier as TierType,
  Filterable,
} from "../../database";
import { Pack } from "./Pack";

const allPacks: PackType[] = ["StandardPack", "ExpansionPack1"];

export type Filters = {
  name: string;
  packs: PackType[];
};
export type SetName = (name: string) => void;
export type TogglePack = (pack: PackType) => void;

export function useFilters(): [Filters, SetName, TogglePack] {
  const [packsFilter, setPacksFilter] = useState<PackType[]>(allPacks);
  const togglePack = useCallback(
    (pack) => {
      if (packsFilter.includes(pack)) {
        setPacksFilter(packsFilter.filter((it) => it != pack));
      } else {
        setPacksFilter(packsFilter.concat(pack));
      }
    },
    [packsFilter, setPacksFilter]
  );

  const [nameFilter, setNameFilter] = useState<string>("");

  return [{ name: nameFilter, packs: packsFilter }, setNameFilter, togglePack];
}

export function Filters(props: {
  filters: Filters;
  setName: SetName;
  togglePack: TogglePack;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <input
        type="search"
        className="bg-gray-900 shadow rounded border-0 p-1"
        placeholder="Search by name"
        value={props.filters.name}
        onChange={(e) => props.setName(e.target.value)}
      />
      <div>
        <span className="p-3">Toggle Packs:</span>
        {allPacks.map((pack, index) => (
          <a onClick={() => props.togglePack(pack)} key={index}>
            <Pack
              pack={pack}
              colored={props.filters.packs.includes(pack)}
              condensed={false}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

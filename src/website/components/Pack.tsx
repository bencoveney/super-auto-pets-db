import React from "react";
import { Pack as PackType } from "../../database";

export function Pack(props: { pack: PackType; colored: boolean }) {
  let packInfo = {
    StandardPack: { color: "bg-blue-900", name: "Standard" },
    ExpansionPack1: { color: "bg-purple-800", name: "Expansion 1" },
    EasterEgg: { color: "bg-yellow-800", name: "Rare Easter Egg" },
  }[props.pack];
  const color = props.colored ? packInfo.color : "bg-grey-700";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 mr-2 text-sm font-semibold ${color}`}
    >
      {packInfo.name}
    </span>
  );
}

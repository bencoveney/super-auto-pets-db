import React from "react";
import { Pet, Food, Tier as TierType } from "../../database";
import { List } from "./List";
import { Tiles } from "./Tiles";

export function Tier(props: { tier: TierType; pets: Pet[]; food: Food[] }) {
  return (
    <div key={props.tier}>
      <h2 className="px-3 text-xl font-light sticky block top-0 z-10 bg-gray-800 py-2">
        {getTierName(props.tier)}
      </h2>
      {/* <List pets={props.pets} food={props.food} /> */}
      <Tiles pets={props.pets} food={props.food} />
    </div>
  );
}

function getTierName(tier: TierType) {
  switch (tier) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return `🎲 Tier ${tier}`;
    case "Summoned":
      return "🪄 Summoned";
    default:
      throw new Error(`Unknown tier: ${tier}`);
  }
}

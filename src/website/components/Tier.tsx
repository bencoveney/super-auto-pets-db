import React from "react";
import { Pet, Food, Tier as TierType } from "../../database";
import { List } from "./List";

export function Tier(props: { tier: TierType; pets: Pet[]; food: Food[] }) {
  return (
    <div key={props.tier} className="py-3">
      <h2 className="px-3 text-xl font-medium">{getTierName(props.tier)}</h2>
      <List pets={props.pets} food={props.food} />
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
      return `Tier ${tier}`;
    case "Summoned":
      return "Summoned";
    default:
      throw new Error(`Unknown tier: ${tier}`);
  }
}

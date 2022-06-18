import React from "react";
import { Pet, Food, Tier as TierType } from "../../db";
import { Tiles } from "./Tiles";

export function Tier(props: {
  tier: TierType;
  availableOnTurn?: number;
  pets: Pet[];
  foods: Food[];
  deferImages: boolean;
}) {
  return (
    <div key={props.tier}>
      <div className="px-3 sticky top-0 z-10 bg-gray-800 py-2 flex flex-row items-baseline justify-between">
        <h2 className="text-xl font-light">{getTierName(props.tier)}</h2>
        {props.availableOnTurn ? (
          <span className="font-bold text-base text-gray-400">
            Available on turn {props.availableOnTurn}
          </span>
        ) : null}
      </div>
      {/* <List pets={props.pets} food={props.food} /> */}
      <Tiles
        pets={props.pets}
        foods={props.foods}
        deferImages={props.deferImages}
      />
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
      return "✨ Summoned";
    default:
      throw new Error(`Unknown tier: ${tier}`);
  }
}

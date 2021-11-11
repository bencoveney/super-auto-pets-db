import React from "react";
import {
  AnyProbability,
  LevelUpProbability,
  Pet,
  ShopProbability,
  SummonProbability,
} from "../../db";
import { Database } from "../../db/database";
import { HasProbabilities } from "../../db/populateProbabilities";

export function ProbabilityTable({
  entity,
  database,
}: {
  entity: HasProbabilities;
  database: Database;
}) {
  return (
    <table className="col-span-2 table-auto w-full">
      <thead>
        <tr>
          <th></th>
          {entity.packs.map((pack, index) => (
            <th key={index} colSpan={2} className="font-normal">
              {pack}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {entity.probabilities?.map((probability, index) => (
          <AnyProbabilityRow
            key={index}
            entity={entity}
            probability={probability}
            database={database}
          />
        ))}
      </tbody>
    </table>
  );
}

function AnyProbabilityRow(props: {
  entity: HasProbabilities;
  probability: AnyProbability;
  database: Database;
}) {
  switch (props.probability.kind) {
    case "shop":
      return (
        <ShopProbabilityRow
          entity={props.entity}
          probability={props.probability}
          database={props.database}
        />
      );
    case "summon":
      return (
        <SummonProbabilityRow
          entity={props.entity}
          probability={props.probability}
        />
      );
    case "levelup":
      return (
        <LevelUpProbabilityRow
          entity={props.entity}
          probability={props.probability}
        />
      );
  }
}

function ShopProbabilityRow(props: {
  entity: HasProbabilities;
  probability: ShopProbability;
  database: Database;
}) {
  const turnName = props.database.turns[props.probability.turn].name;
  return (
    <tr>
      <td className="font-bold text-base text-gray-300">{turnName}</td>
      {props.entity.packs.flatMap((pack, index) => {
        return [
          <td key={`shop-${index}`} className="text-right">
            {formatProbability(props.probability.perShop[pack])}
            <span className="text-base text-gray-300"> / shop</span>
          </td>,
          <td key={`slot-${index}`} className="text-right">
            {formatProbability(props.probability.perSlot[pack])}
            <span className="text-base text-gray-300"> / slot</span>
          </td>,
        ];
      })}
    </tr>
  );
}

function SummonProbabilityRow(props: {
  entity: HasProbabilities;
  probability: SummonProbability;
}) {
  return <tr></tr>;
}

function LevelUpProbabilityRow(props: {
  entity: HasProbabilities;
  probability: LevelUpProbability;
}) {
  return <tr></tr>;
}

function formatProbability(probability: number) {
  let percentage = (Math.round(probability * 1000) / 10).toString();
  if (percentage.indexOf(".") < 0) {
    percentage = `${percentage}.0`;
  }
  return `${percentage}%`;
}

import React from "react";
import {
  AnyProbability,
  LevelUpProbability,
  Pet,
  ShopProbability,
  SummonProbability,
} from "../../db";
import { Database } from "../../db/database";

export function ProbabilityTable({
  pet,
  database,
}: {
  pet: Pet;
  database: Database;
}) {
  return (
    <table className="col-span-2 table-auto w-full">
      <thead>
        <tr>
          <th></th>
          {pet.packs.map((pack, index) => (
            <th key={index} colSpan={2} className="font-normal">
              {pack}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {pet.probabilities?.map((probability, index) => (
          <AnyProbabilityRow
            key={index}
            pet={pet}
            probability={probability}
            database={database}
          />
        ))}
      </tbody>
    </table>
  );
}

function AnyProbabilityRow(props: {
  pet: Pet;
  probability: AnyProbability;
  database: Database;
}) {
  switch (props.probability.kind) {
    case "shop":
      return (
        <ShopProbabilityRow
          pet={props.pet}
          probability={props.probability}
          database={props.database}
        />
      );
    case "summon":
      return (
        <SummonProbabilityRow pet={props.pet} probability={props.probability} />
      );
    case "levelup":
      return (
        <LevelUpProbabilityRow
          pet={props.pet}
          probability={props.probability}
        />
      );
  }
}

function ShopProbabilityRow(props: {
  pet: Pet;
  probability: ShopProbability;
  database: Database;
}) {
  const turnName = props.database.turns[props.probability.turn].name;
  return (
    <tr>
      <td className="font-bold text-base text-gray-300">{turnName}</td>
      {props.pet.packs.flatMap((pack, index) => {
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
  pet: Pet;
  probability: SummonProbability;
}) {
  return <tr></tr>;
}

function LevelUpProbabilityRow(props: {
  pet: Pet;
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

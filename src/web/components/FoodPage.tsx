import React from "react";
import { Food } from "../../db";
import { Database } from "../../db/database";
import { AbilityDescription } from "./AbilityDescription";
import { Breadcrumbs } from "./Breadcrumbs";
import { EmojiSource } from "./EmojiSource";
import { Header } from "./Header";
import { Pack } from "./Pack";
import { Polaroid } from "./Polaroid";
import { StatDisplay } from "./StatDisplay";
import { StatsGrid, StatsSummary, StatsRow } from "./StatsGrid";

export function FoodPage(props: { food: Food; database: Database }) {
  return (
    <>
      <Header>
        <Breadcrumbs {...props} />
      </Header>
      <div className="m-3">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-start lg:justify-center">
          <div className="flex-grow max-w-xs w-80">
            <Polaroid
              id={props.food.id}
              name={props.food.name}
              background="bgimage-4"
            />
          </div>
          <StatsGrid>
            <StatsSummary>Stats</StatsSummary>
            <StatsRow text="Name">{props.food.name}</StatsRow>
            <StatsRow text="Tier">
              <StatDisplay stat={props.food.tier} emoji="🎲" />
            </StatsRow>
            <StatsRow text="Packs">
              {(props.food.packs || []).map((pack, index) => (
                <Pack
                  pack={pack}
                  key={index}
                  colored={true}
                  condensed={false}
                />
              ))}
            </StatsRow>
            <StatsRow text="Notes" className="italic">
              {props.food.notes}
            </StatsRow>
            <StatsRow text="Image">
              <EmojiSource image={props.food.image} />
            </StatsRow>
            <StatsSummary>Abilities</StatsSummary>
            <StatsRow text="Effect">
              <AbilityDescription
                ability={props.food.ability}
                database={props.database}
              />
            </StatsRow>
          </StatsGrid>
        </div>
      </div>
    </>
  );
}

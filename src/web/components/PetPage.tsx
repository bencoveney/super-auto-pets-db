import React from "react";
import { Pet } from "../../db";
import { Database } from "../../db/database";
import { AbilityDescription } from "./AbilityDescription";
import { Breadcrumbs } from "./Breadcrumbs";
import { Header } from "./Header";
import { Pack } from "./Pack";
import { Polaroid } from "./Polaroid";
import { StatDisplay } from "./StatDisplay";
import { StatsGrid, StatsSummary, StatsRow } from "./StatsGrid";
import { StatusDescription } from "./StatusDescription";

export function PetPage(props: { pet: Pet; database: Database }) {
  return (
    <>
      <Header>
        <Breadcrumbs {...props} />
      </Header>
      <div className="m-3">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-start lg:justify-center">
          <div className="flex-grow max-w-xs w-80">
            <Polaroid
              id={props.pet.id}
              name={props.pet.name}
              background="bgimage-1"
            />
          </div>
          <StatsGrid>
            <StatsSummary>Stats</StatsSummary>
            <StatsRow text="Name">{props.pet.name}</StatsRow>
            <StatsRow text="Tier">
              <StatDisplay stat={props.pet.tier} emoji="🎲" />
            </StatsRow>
            <StatsRow text="Attack">
              <StatDisplay stat={props.pet.baseAttack} emoji="⚔️" />
            </StatsRow>
            <StatsRow text="Health">
              <StatDisplay stat={props.pet.baseHealth} emoji="💖" />
            </StatsRow>
            <StatsRow text="Packs">
              {(props.pet.packs || []).map((pack, index) => (
                <Pack
                  pack={pack}
                  key={index}
                  colored={true}
                  condensed={false}
                />
              ))}
            </StatsRow>
            <StatsRow text="Notes" className="italic">
              {props.pet.notes}
            </StatsRow>
            <StatsSummary>Abilities</StatsSummary>
            <StatsRow text="Level 1">
              <AbilityDescription ability={props.pet.level1Ability} />
            </StatsRow>
            <StatsRow text="Level 2">
              <AbilityDescription ability={props.pet.level2Ability} />
            </StatsRow>
            <StatsRow text="Level 3">
              <AbilityDescription ability={props.pet.level3Ability} />
            </StatsRow>
            {props.pet.status && (
              <StatsRow text="Status">
                <StatusDescription
                  status={props.pet.status}
                  database={props.database}
                />
              </StatsRow>
            )}
          </StatsGrid>
        </div>
      </div>
    </>
  );
}

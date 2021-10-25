import React from "react";
import { Pet as PetType, Ability as AbilityType, Stat } from "../../database";
import { Polaroid } from "./Polaroid";
import { Pack } from "./Pack";
import { Status } from "./Status";
import { StatsGrid, StatsRow, StatsSummary } from "./StatsGrid";
import { StatDisplay } from "./StatDisplay";
import { AbilityDescription } from "./AbilityDescription";

export function Pet(props: { pet: PetType }) {
  return (
    <div className="m-3">
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-start lg:justify-center">
        <div className="flex-grow max-w-xs w-80">
          <Polaroid name={props.pet.name} background="bgimage-1" />
        </div>
        <StatsGrid>
          <StatsSummary>Stats</StatsSummary>
          <StatsRow text="Name">{props.pet.name}</StatsRow>
          <StatsRow text="Attack">
            <StatDisplay stat={props.pet.baseAttack} emoji="⚔️" />
          </StatsRow>
          <StatsRow text="Health">
            <StatDisplay stat={props.pet.baseHealth} emoji="💖" />
          </StatsRow>
          <StatsRow text="Packs">
            {(props.pet.packs || []).map((pack, index) => (
              <Pack pack={pack} key={index} colored={true} condensed={false} />
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
              <Status status={props.pet.status} />
            </StatsRow>
          )}
        </StatsGrid>
      </div>
    </div>
  );
}

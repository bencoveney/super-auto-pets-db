import React from "react";
import { Pet } from "../../db";
import { Database } from "../../db/database";
import { Breadcrumbs } from "./Breadcrumbs";
import { EmojiSource } from "./EmojiSource";
import { Header } from "./Header";
import { Pack } from "./Pack";
import { Polaroid } from "./Polaroid";
import { ProbabilityTable } from "./ProbabilityTable";
import { StatDisplay } from "./StatDisplay";
import { StatsGrid, StatsSummary, StatsRow } from "./StatsGrid";
import { SummaryAbility } from "./SummaryAbility";
import { SummaryStatus } from "./SummaryStatus";

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
            <StatsRow text="Image">
              <EmojiSource image={props.pet.image} />
            </StatsRow>
            <StatsSummary>Abilities</StatsSummary>
            {props.pet.level1Ability && (
              <StatsRow text="Level 1">
                <SummaryAbility
                  ability={props.pet.level1Ability}
                  pet={props.pet}
                  database={props.database}
                />
              </StatsRow>
            )}
            {props.pet.level2Ability && (
              <StatsRow text="Level 2">
                <SummaryAbility
                  ability={props.pet.level2Ability}
                  pet={props.pet}
                  database={props.database}
                />
              </StatsRow>
            )}
            {props.pet.level3Ability && (
              <StatsRow text="Level 3">
                <SummaryAbility
                  ability={props.pet.level3Ability}
                  pet={props.pet}
                  database={props.database}
                />
              </StatsRow>
            )}
            {props.pet.status && (
              <StatsRow text="Status">
                <p>This pet is summoned with:</p>
                <SummaryStatus
                  status={props.pet.status}
                  pet={props.pet.id}
                  database={props.database}
                />
              </StatsRow>
            )}
            {(props.pet.probabilities?.length || -1) > 0 && (
              <>
                <StatsSummary>Appearance Probability</StatsSummary>
                <ProbabilityTable pet={props.pet} database={props.database} />
              </>
            )}
          </StatsGrid>
        </div>
      </div>
    </>
  );
}

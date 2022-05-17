import React from "react";
import { Ability, Target, Pet, Trigger, Effect } from "../../db";
import { Database } from "../../db/database";
import { SummaryPet } from "./SummaryPet";
import { SummaryStatus } from "./SummaryStatus";

export function SummaryAbility(props: {
  ability: Ability;
  pet: Pet;
  database: Database;
}) {
  return (
    <div className="mb-3 pb-3 border-b border-gray-500">
      <p className="text-xl font-light">{props.ability.description}</p>
      {typeof props.ability.maxTriggers === "number" ? (
        <MaxTriggers maxTriggers={props.ability.maxTriggers} />
      ) : null}
      <DescribeAbility {...props} />
      {props.ability.effect.kind === "ApplyStatus" ? (
        <SummaryStatus
          status={props.ability.effect.status}
          pet={props.pet.id}
          database={props.database}
        />
      ) : null}
      {props.ability.effect.kind === "SummonPet" ? (
        <SummaryPet
          pet={props.ability.effect.pet}
          database={props.database}
          setAttack={props.ability.effect.withAttack}
          setHealth={props.ability.effect.withHealth}
        />
      ) : null}
    </div>
  );
}

function MaxTriggers(props: { maxTriggers: number }) {
  return <p className="italic">Works {props.maxTriggers} times per turn.</p>;
}

function DescribeAbility(props: {
  ability: Ability;
  pet: Pet;
  database: Database;
}) {
  if (props.pet.tier !== 1) {
    return null;
  }

  const target = describeTarget(props.ability.triggeredBy, props.pet, false);
  const trigger = describeTrigger(props.ability.trigger, props.pet);
  const effect = describeEffect(
    props.ability.effect,
    props.ability.trigger,
    props.database,
    props.pet
  );
  const description = `Whenever ${target.description} ${trigger.description}, ${effect.description}`;
  const paragraphs = [
    description,
    ...target.notes,
    ...trigger.notes,
    ...effect.notes,
  ];

  return (
    <ul className="list-disc ml-5 py-3">
      {paragraphs.map((content, index) => (
        <li key={index} className="text-base mt-1">
          {content}
        </li>
      ))}
    </ul>
  );
}

function describeTarget(
  triggeredBy: Target,
  abilityOwner: Pet,
  fromEffect: boolean
): { description: string; isPlural: boolean; notes: string[] } {
  switch (triggeredBy.kind) {
    case "Self":
      return {
        description: `this ${abilityOwner.name}`,
        isPlural: false,
        notes: [],
      };
    case "Player":
      return {
        description: "you",
        isPlural: false,
        notes: [],
      };
    case "All":
      return {
        description: `${fromEffect ? "any animal" : "all animals"}`,
        isPlural: !fromEffect,
        notes: [],
      };
    case "EachFriend":
      return {
        description: `${fromEffect ? "each" : "any"} friend`,
        isPlural: !fromEffect,
        notes: [],
      };
    case "EachEnemy":
      return {
        description: `${fromEffect ? "each" : "any"} enemy`,
        isPlural: !fromEffect,
        notes: [],
      };
    case "LeftMostFriend":
      return {
        description: "the left-most friend",
        isPlural: false,
        notes: [],
      };
    case "RightMostFriend":
      return {
        description: "the right-most friend",
        isPlural: false,
        notes: [],
      };
    case "TriggeringEntity":
      return {
        description: `${
          fromEffect ? "that animal" : "the entity that triggered this"
        }`,
        isPlural: false,
        notes: [],
      };
    case "AdjacentAnimals":
      return { description: "adjacent animals", isPlural: true, notes: [] };
    case "AdjacentFriends":
      return { description: "adjacent friends", isPlural: true, notes: [] };
    case "Level2And3Friends":
      return {
        description: "level 2 and 3 friends",
        isPlural: true,
        notes: [],
      };
    case "FirstEnemy":
      return { description: "the first enemy", isPlural: false, notes: [] };
    case "LastEnemy":
      return { description: "the last enemy", isPlural: false, notes: [] };
    case "LowestHealthEnemy":
      return {
        description: "the lowest health enemy",
        isPlural: false,
        notes: [],
      };
    case "HighestHealthEnemy":
      return {
        description: "the lowest health enemy",
        isPlural: false,
        notes: [],
      };
    case "StrongestFriend":
      return {
        description:
          "the strongest friend (with the strongest combined health and attack)",
        isPlural: false,
        notes: [
          "Strength is the sum of attack and health, for example a 3/4 pet would have 7 strength.",
        ],
      };
    case "DifferentTierAnimals":
      return {
        description: "the left-most animal of each tier",
        isPlural: false,
        notes: [],
      };
    case "PurchaseTarget":
      return {
        description: "the animal that was targeted with the food",
        isPlural: false,
        notes: [],
      };
    case "None":
      return { description: "none???", isPlural: false, notes: [] };
    case "FriendAhead": {
      const n = triggeredBy.n;
      return {
        description: `the ${n} ${n > 1 ? "friends" : "friend"} ahead`,
        isPlural: n > 1,
        notes: [],
      };
    }
    case "FriendBehind": {
      const n = triggeredBy.n;
      return {
        description: `the ${n} ${n > 1 ? "friends" : "friend"} ahead`,
        isPlural: n > 1,
        notes: [],
      };
    }
    case "RandomFriend": {
      const n = triggeredBy.n;
      return {
        description: `${n == 1 ? "a" : n} randomly selected ${
          n > 1 ? "friends" : "friend"
        }`,
        isPlural: n > 1,
        notes: [
          `When selecting a random friend, the ${abilityOwner.name} that triggered this ability will not be selected.`,
        ],
      };
    }
    case "RandomEnemy": {
      const n = triggeredBy.n;
      return {
        description: `${n == 1 ? "a" : n} randomly selected ${
          n > 1 ? "enemies" : "enemy"
        }`,
        isPlural: n > 1,
        notes: [],
      };
    }
    case "EachShopAnimal": {
      if (triggeredBy.includingFuture) {
        return {
          description: "current and future animals in the shop",
          isPlural: true,
          notes: [],
        };
      } else {
        return {
          description: "animals currently in the shop",
          isPlural: true,
          notes: [
            "Buffs to shop animals can be preserved between turns by freezing the animal.",
          ],
        };
      }
    }
    default:
      return { description: "UNKNOWN", isPlural: false, notes: [] };
  }
}

function describeTrigger(
  trigger: Trigger,
  abilityOwner: Pet
): {
  description: string;
  notes: string[];
} {
  // TODO: Many abilities trigger in order based on attack.
  // Particularly annoying for start-of-battle (e.g. dolphin/caterpillar).
  switch (trigger) {
    case "Faint":
      return {
        description: "faints",
        notes: ["Faint abilities can be triggered in the shop using the pill."],
      };
    case "Sell":
      return { description: "is sold", notes: [] };
    case "LevelUp":
      return { description: "levels up", notes: [] };
    case "Summoned":
      return {
        description: "is summoned",
        notes: [
          "This ability can be triggered on the shop screen, whenever a new animal is placed into an empty slot on your team.",
        ],
      };
    case "StartOfBattle":
      return { description: "start the battle", notes: [] };
    case "StartOfTurn":
      return {
        description: "start the turn",
        notes: ["The turn starts as you enter the shop screen."],
      };
    case "Buy":
      return {
        description: "is bought from the shop",
        notes: [
          `You can drag the ${abilityOwner.name} onto an existing ${abilityOwner.name} or an empty slot to trigger this ability.`,
        ],
      };
    case "BuyAfterLoss":
      return {
        description:
          "is bought from the shop after you lost the previous battle",
        notes: [],
      };
    case "BuyTier1Animal":
      return { description: "buy a tier 1 animal", notes: [] };
    case "BuyFood":
      return { description: "buy food", notes: [] };
    case "BeforeAttack":
      return { description: "is about to attack", notes: [] };
    case "Hurt":
      return { description: "is hurt", notes: [] };
    case "EndOfTurn":
      return {
        description: "end the turn",
        notes: [
          "The turn ends as you leave the shop screen, before you enter the battle.",
        ],
      };
    case "EndOfTurnWith2PlusGold":
      return {
        description: "end the turn with 2 or more unspent gold",
        notes: [],
      };
    case "EndOfTurnWith3PlusGold":
      return {
        description: "end the turn with 3 or more unspent gold",
        notes: [],
      };
    case "EndOfTurnWithLvl3Friend":
      return {
        description: "end the turn with at least 1 level 3 friend",
        notes: [],
      };
    case "EndOfTurnWith4OrLessAnimals":
      return {
        description: "end the turn 4 or less animals in your team",
        notes: [],
      };
    case "AfterAttack":
      return { description: "has just attacked", notes: [] };
    case "EatsShopFood":
      return { description: "eats shop food", notes: [] };
    case "KnockOut":
      return { description: "knocks out an enemy animal", notes: [] };
    case "CastsAbility":
      return { description: "activate's its ability", notes: [] };
    case "WhenAttacking":
      return { description: "is being dealt damage", notes: [] };
    case "WhenDamaged":
      return { description: "is dealing damage", notes: [] };
    default:
      return { description: "UNKNOWN", notes: [] };
  }
}

function describeEffect(
  effect: Effect,
  trigger: Trigger,
  database: Database,
  abilityOwner: Pet
): {
  description: string;
  notes: string[];
} {
  switch (effect.kind) {
    case "ModifyStats": {
      const target = describeTarget(effect.target, abilityOwner, true);
      const gains = target.isPlural ? "gain" : "gains";
      const attackModifier = effect.attackAmount
        ? `+${effect.attackAmount} attack`
        : "";
      const healthModifier = effect.healthAmount
        ? `+${effect.healthAmount} health`
        : "";
      const joinier = effect.attackAmount && effect.healthAmount ? " and " : "";
      const notes = [...target.notes];
      if (effect.untilEndOfBattle) {
        notes.push(
          "This buff is temporary and it will be removed at the end of the battle, or the end of the upcoming battle if applied in the shop."
        );
      } else if (effect.target.kind != "EachShopAnimal") {
        if (canFireInTheShop(trigger)) {
          if (canFireInBattle(trigger)) {
            notes.push(
              "When this buff is applied to your friends in the shop screen, it is permanent."
            );
          } else {
            notes.push("This buff is applied permanently.");
          }
        }
        if (canFireInBattle(trigger)) {
          notes.push(
            "When this buff is applied to an animal during a battle, it will not be retained after the battle has finished."
          );
        }
      }
      return {
        description: `${target.description} ${gains} ${attackModifier}${joinier}${healthModifier}.`,
        notes,
      };
    }
    case "DealDamage":
      return {
        description: `this ${abilityOwner.name} deals ${
          effect.amount
        } damage to ${
          describeTarget(effect.target, abilityOwner, true).description
        }.`,
        notes: [],
      };
    case "SummonPet": {
      const summonedName = database.pets[effect.pet].name;
      const team =
        effect.team == "Friendly"
          ? "to fight on your team"
          : "to fight on the enemy team";
      const notes = [
        `The ${summonedName} will not be summoned if you already have a full team of 5 animals. This can happen when animals summon multiple other animals when they faint, for example.`,
      ];
      if (canFireInTheShop(trigger)) {
        notes.push(
          `If this ability is triggered in the shop screen, the summoned ${summonedName} will become a member of your team.`
        );
      }
      return {
        description: `a ${summonedName} will be summoned ${team} for the rest of the battle.`,
        notes,
      };
    }
    case "GainGold":
      return {
        description: `you gain an extra ${effect.amount} gold.`,
        notes: [],
      };
    case "GainExperience":
      return { description: ``, notes: [] };
    case "TransferStats":
      return { description: ``, notes: [] };
    case "TransferAbility":
      return { description: ``, notes: [] };
    case "GainAbility":
      return { description: ``, notes: [] };
    case "OneOf":
      return { description: ``, notes: [] };
    case "AllOf":
      return { description: ``, notes: [] };
    case "ApplyStatus":
      return { description: ``, notes: [] };
    case "Swallow":
      return { description: ``, notes: [] };
    case "Evolve":
      return { description: ``, notes: [] };
    case "ReduceHealth":
      return { description: ``, notes: [] };
    case "RefillShops":
      return { description: ``, notes: [] };
    case "FoodMultiplier":
      return { description: ``, notes: [] };
    case "RepeatAbility":
      return { description: ``, notes: [] };
    case "Faint":
      return { description: ``, notes: [] };
    case "SummonRandomPet":
      return { description: ``, notes: [] };
    case "RespawnPet":
      return { description: ``, notes: [] };
    case "ModifyDamage":
      return { description: ``, notes: [] };
    case "SplashDamage":
      return { description: ``, notes: [] };
    case "DiscountFood":
      return {
        description: `On the next turn, if this animal is on your team, the first set of food in the shop will be discounted`,
        notes: [`This only applies to the food that first appears, food on subsequent rolls will be full price`],
      };
    case "AddShopFood":
      return {
        description: `This will add another food item to the shop.`,
        notes: [],
  }
}
}

function canFireInTheShop(trigger: Trigger) {
  switch (trigger) {
    case "Faint":
    case "Sell":
    case "LevelUp":
    case "Summoned":
    case "Buy":
    case "BuyAfterLoss":
    case "BuyTier1Animal":
    case "BuyFood":
    case "Hurt":
    case "EndOfTurn":
    case "EndOfTurnWith2PlusGold":
    case "EndOfTurnWith3PlusGold":
    case "EndOfTurnWithLvl3Friend":
    case "EndOfTurnWith4OrLessAnimals":
    case "EatsShopFood":
    case "CastsAbility":
      return true;
    case "StartOfBattle":
    case "StartOfTurn":
    case "BeforeAttack":
    case "AfterAttack":
    case "KnockOut":
    case "WhenAttacking":
    case "WhenDamaged":
      return false;
    default:
      throw new Error(`Unknown trigger: ${trigger}`);
  }
}

function canFireInBattle(trigger: Trigger) {
  switch (trigger) {
    case "Faint":
    case "Summoned":
    case "StartOfBattle":
    case "StartOfTurn":
    case "BeforeAttack":
    case "Hurt":
    case "AfterAttack":
    case "KnockOut":
    case "CastsAbility":
    case "WhenAttacking":
    case "WhenDamaged":
      return true;
    case "Sell":
    case "LevelUp":
    case "Buy":
    case "BuyAfterLoss":
    case "BuyTier1Animal":
    case "BuyFood":
    case "EndOfTurn":
    case "EndOfTurnWith2PlusGold":
    case "EndOfTurnWith3PlusGold":
    case "EndOfTurnWithLvl3Friend":
    case "EndOfTurnWith4OrLessAnimals":
    case "EatsShopFood":
      return false;
    default:
      throw new Error(`Unknown trigger: ${trigger}`);
  }
}

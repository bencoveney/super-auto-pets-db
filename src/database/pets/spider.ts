import { Ability, Trigger, Pet } from "..";

function spiderAbility(level: number): Ability {
  return {
    description: `Faint: Summon one tier 3 animal as a ${level}/${level}.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "SummonPet",
      pet: {
        // TODO: Summon correct pet.
        name: "Tier 3 animal",
        tier: "Summoned",
        baseAttack: level * 2,
        baseHealth: level * 2,
      },
    },
  };
}

export const spider = {
  name: "Spider",
  tier: 2,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: spiderAbility(1),
  level2Ability: spiderAbility(2),
  level3Ability: spiderAbility(3),
} as Pet;

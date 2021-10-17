import { Ability, Trigger, Pet } from "..";

function elephantAbility(level: number): Ability {
  return {
    description: `Before Attack: Deal 1 damage to ${level} friends behind.`,
    trigger: Trigger.BeforeAttack,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "FriendBehind",
        n: level,
      },
      amount: 1,
    },
  };
}

export const elephant = {
  name: "Elephant",
  tier: 2,
  baseAttack: 3,
  baseHealth: 5,
  packs: ["StandardPack"],
  level1Ability: elephantAbility(1),
  level2Ability: elephantAbility(2),
  level3Ability: elephantAbility(3),
} as Pet;

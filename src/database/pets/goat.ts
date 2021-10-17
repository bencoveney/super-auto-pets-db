import { Ability, Trigger, Pet } from "..";

function goatAbility(level: number): Ability {
  return {
    description: `Friend bought: Gain 1 gold.`,
    trigger: Trigger.Buy,
    triggeredBy: {
      kind: "EachFriend",
    },
    effect: {
      kind: "GainGold",
      amount: 1,
    },
  };
}

export const goat = {
  name: "Goat",
  tier: 5,
  baseAttack: 4,
  baseHealth: 5,
  packs: ["ExpansionPack1"],
  level1Ability: goatAbility(1),
  level2Ability: goatAbility(2),
  level3Ability: goatAbility(3),
} as Pet;

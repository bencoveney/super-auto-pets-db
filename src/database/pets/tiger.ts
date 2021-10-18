import { Ability, Trigger, Pet } from "..";

function tigerAbility(level: number): Ability {
  return {
    description: `The friend ahead casts their ability twice in battle.`,
    trigger: Trigger.CastsAbility,
    triggeredBy: {
      kind: "FriendAhead",
      n: 1,
    },
    effect: {
      kind: "RepeatAbility",
      target: {
        // TODO: Should this be targeting the ability rather than the entity?
        kind: "TriggeringEntity",
      },
    },
  };
}

export const tiger = {
  name: "Tiger",
  unicodeCodePoint: "\u{1F405}",
  tier: 6,
  baseAttack: 4,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: tigerAbility(1),
  level2Ability: tigerAbility(2),
  level3Ability: tigerAbility(3),
} as Pet;

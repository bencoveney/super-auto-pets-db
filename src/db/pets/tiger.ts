import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function tigerAbility(level: number): Ability {
  return {
    description: `The friend ahead casts their ability twice in battle.`,
    trigger: Trigger.CastsAbility,
    triggeredBy: {
      kind: "FriendAhead",
      n: 1,
    },
    effect: {
      // TODO: Does this trigger on End of Turn and Start of Turn effects?
      kind: "RepeatAbility",
      target: {
        // TODO: Should this be targeting the ability rather than the entity?
        kind: "TriggeringEntity",
      },
    },
  };
}

export const tiger: Pet = {
  ...getPetIdentifiers("Tiger"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F405}",
  },
  tier: 6,
  baseAttack: 4,
  baseHealth: 3,
  packs: ["StandardPack"],
  level1Ability: tigerAbility(1),
  level2Ability: tigerAbility(2),
  level3Ability: tigerAbility(3),
};

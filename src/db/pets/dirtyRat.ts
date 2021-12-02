import { Pet, Ability, Trigger, } from "..";
import { getPetIdentifiers } from "../database";



function dirtyRatAbility(level : number): Ability {
  return {
    description: `Friend ahead attacks: Deal it ${level} damage`,
    trigger: Trigger.AfterAttack,
    triggeredBy: {
      kind: "FriendAhead",
      n: 1,
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "FriendAhead",
        n: 1,
      },
      amount: level,
    },
  };
}

export const dirtyRat: Pet = {
  ...getPetIdentifiers("Dirty Rat"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F400}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: 1,
  baseHealth: 1,
  level1Ability: dirtyRatAbility(1),
  level2Ability: dirtyRatAbility(2),
  level3Ability: dirtyRatAbility(3),
};

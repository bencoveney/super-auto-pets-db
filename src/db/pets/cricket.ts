import { Ability, Pet, Trigger } from "..";
import { getPetIdentifiers } from "../database";
import { zombieCricket } from "./zombieCricket";

function cricketAbility(level: number): Ability {
  return {
    description: `Faint: Summon a ${level}/${level} Cricket`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: zombieCricket.id,
      withAttack: level,
      withHealth: level,
      team: "Friendly",
    },
  };
}

export const cricket: Pet = {
  ...getPetIdentifiers("Cricket"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F997}",
  },
  tier: 1,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: cricketAbility(1),
  level2Ability: cricketAbility(2),
  level3Ability: cricketAbility(3),
};

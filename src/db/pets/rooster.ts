import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";
import { chick } from "./chick";

function roosterAbility(level: number): Ability {
  return {
    description: `Faint: Summon ${level} Chicks with 1 health and half the Attack of this.`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: chick.id,
      team: "Friendly",
      // TODO: Represent copied attack value.
    },
  };
}

export const rooster: Pet = {
  ...getPetIdentifiers("Rooster"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F413}",
  },
  tier: 4,
  baseAttack: 5,
  baseHealth: 3,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: {
    ...roosterAbility(1),
    description:
      "Faint: Summon a Chick with 1 health and half the Attack of this.",
  },
  level2Ability: roosterAbility(2),
  level3Ability: roosterAbility(3),
};

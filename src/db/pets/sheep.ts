import { Pet, Ability, Trigger } from "..";
import { getPetIdentifiers } from "../database";
import { ram } from "./ram";

function sheepAbility(level: number): Ability {
  return {
    description: `Faint: Summon two ${level * 2}/${level * 2} Rams`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: ram.id,
      withAttack: level * 2,
      withHealth: level * 2,
      team: "Friendly",
    },
  };
}

export const sheep: Pet = {
  ...getPetIdentifiers("Sheep"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F411}",
  },
  tier: 3,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: sheepAbility(1),
  level2Ability: sheepAbility(2),
  level3Ability: sheepAbility(3),
};

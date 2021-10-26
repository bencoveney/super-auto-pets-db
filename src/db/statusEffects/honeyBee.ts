import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";
import { bee } from "../pets/bee";

export const honeyBee: Status = {
  ...getStatusIdentifiers("Honey Bee"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F36F}",
  },
  ability: {
    description: "Summon a 1/1 Bee after fainting.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Faint,
    effect: {
      kind: "SummonPet",
      pet: bee.id,
      team: "Friendly",
    },
  },
};

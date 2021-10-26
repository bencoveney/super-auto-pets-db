import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";
import { bee } from "../pets/bee";

export const honeyBee: Status = {
  ...getStatusIdentifiers("Honey Bee"),
  image: {
    source: "twemoji",
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

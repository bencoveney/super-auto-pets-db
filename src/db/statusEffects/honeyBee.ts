import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";
import { beeSummoned } from "../food/honey";

export const honeyBee: Status = {
  ...getStatusIdentifiers("Honey Bee"),
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F36F}",
  },
  ability: {
    description: "Ignore damage once.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Faint,
    effect: {
      kind: "SummonPet",
      pet: beeSummoned,
      team: "Friendly",
    },
  },
};

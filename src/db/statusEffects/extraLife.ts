import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const extraLife: Status = {
  ...getStatusIdentifiers("Extra Life"),
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F344}",
  },
  ability: {
    description: "Come back as a 1/1 after fainting",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Faint,
    effect: {
      kind: "RespawnPet",
      baseAttack: 1,
      baseHealth: 1,
    },
  },
};

import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const extraLife: Status = {
  ...getStatusIdentifiers("Extra Life"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
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

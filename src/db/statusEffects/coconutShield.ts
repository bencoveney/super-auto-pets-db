import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const coconutShield: Status = {
  ...getStatusIdentifiers("Coconut Shield"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F965}",
  },
  ability: {
    description: "Ignore damage once.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.WhenDamaged,
    effect: {
      kind: "ModifyDamage",
      damageModifier: -Infinity,
      appliesOnce: true,
    },
  },
};

import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const poisonAttack: Status = {
  ...getStatusIdentifiers("Poison Attack"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F95C}",
  },
  ability: {
    description: "Knock out any animal hit by this.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.WhenAttacking,
    effect: {
      kind: "ModifyDamage",
      damageModifier: Infinity,
      appliesOnce: false,
    },
  },
};

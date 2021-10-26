import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const steakAttack: Status = {
  ...getStatusIdentifiers("Steak Attack"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F969}",
  },
  ability: {
    description: "Attack for 20 more damage, once.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.WhenAttacking,
    effect: {
      kind: "ModifyDamage",
      damageModifier: 20,
      appliesOnce: true,
    },
  },
};

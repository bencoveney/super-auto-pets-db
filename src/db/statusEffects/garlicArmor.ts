import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const garlicArmor: Status = {
  ...getStatusIdentifiers("Garlic Armor"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F9C4}",
  },
  ability: {
    description: "Take 2 less damage.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.WhenDamaged,
    effect: {
      kind: "ModifyDamage",
      damageModifier: -2,
      appliesOnce: false,
    },
  },
};

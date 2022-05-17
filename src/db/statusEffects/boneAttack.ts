import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const boneAttack: Status = {
  ...getStatusIdentifiers("Bone Attack"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F356}",
  },
  ability: {
    description: "Attack for 4 more damage.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.WhenAttacking,
    effect: {
      kind: "ModifyDamage",
      damageModifier: 4,
      appliesOnce: false,
    },
  },
};

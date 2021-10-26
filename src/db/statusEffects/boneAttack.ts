import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const boneAttack: Status = {
  ...getStatusIdentifiers("Bone Attack"),
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F356}",
  },
  ability: {
    description: "Attack for 5 more damage.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.WhenAttacking,
    effect: {
      kind: "ModifyDamage",
      damageModifier: 5,
      appliesOnce: false,
    },
  },
};

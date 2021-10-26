import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const weak: Status = {
  ...getStatusIdentifiers("Weak"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F9A0}",
  },
  ability: {
    description: "Take 5 extra damage.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.WhenDamaged,
    effect: {
      kind: "ModifyDamage",
      damageModifier: 5,
      appliesOnce: false,
    },
  },
};

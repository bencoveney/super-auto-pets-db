import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const garlicArmor: Status = {
  ...getStatusIdentifiers("Garlic Armor"),
  image: {
    source: "twemoji",
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

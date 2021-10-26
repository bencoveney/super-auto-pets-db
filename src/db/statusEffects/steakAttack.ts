import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const steakAttack: Status = {
  ...getStatusIdentifiers("Steak Attack"),
  image: {
    source: "twemoji",
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

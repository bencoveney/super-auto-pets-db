import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const coconutShield: Status = {
  ...getStatusIdentifiers("Coconut Shield"),
  image: { source: "twemoji", unicodeCodePoint: "\u{1F965}" },
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

import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const poisonAttack: Status = {
  ...getStatusIdentifiers("Poison Attack"),
  image: { source: "twemoji", unicodeCodePoint: "\u{1F95C}" },
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

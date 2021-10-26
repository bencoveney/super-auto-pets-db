import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const melonArmor: Status = {
  ...getStatusIdentifiers("Melon Armor"),
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F348}",
  },
  ability: {
    description: "Take 20 damage less, once.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.WhenDamaged,
    effect: {
      kind: "ModifyDamage",
      damageModifier: -20,
      appliesOnce: true,
    },
  },
};

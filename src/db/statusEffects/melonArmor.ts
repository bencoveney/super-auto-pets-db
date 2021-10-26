import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const melonArmor: Status = {
  ...getStatusIdentifiers("Melon Armor"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
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

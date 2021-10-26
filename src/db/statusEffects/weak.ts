import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const weak: Status = {
  ...getStatusIdentifiers("Weak"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
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

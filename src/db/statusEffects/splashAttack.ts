import { Status, Trigger } from "..";
import { getStatusIdentifiers } from "../database";

export const splashAttack: Status = {
  ...getStatusIdentifiers("Splash Attack"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F336}",
  },
  ability: {
    description: "Attack second enemy for 5 damage.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.WhenAttacking,
    effect: {
      kind: "SplashDamage",
      amount: 5,
    },
  },
};

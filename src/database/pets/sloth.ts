import { Pet } from "..";

export const sloth = {
  name: "Sloth",
  notes:
    "Has no special ability. Is kind of lame combat-wise. But he truly believes in you!",
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F9A5}",
  },
  tier: 1,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["EasterEgg"],
} as Pet;

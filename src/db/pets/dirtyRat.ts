import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

// Summoned -> Deal level damage to friend ahead
//

function dirtyRatAbility(level: number): Ability {
	const damage = level * 3;
	return {
		description: `Summoned: Deal ${damage} damage to friend ahead.`,
		trigger: Trigger.Summoned,
		triggeredBy: {
			kind: "Self"
		},
		effect: {
			kind: "DealDamage",
			target: {
				kind: "FriendAhead",
				n: 1,
			},
			amount: damage,
		}
	};
}

export const dirtyRat: Pet = {
  ...getPetIdentifiers("Dirty Rat"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F400}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: 1,
  baseHealth: 1,
  level1Ability: dirtyRatAbility(1),
  level2Ability: dirtyRatAbility(2),
  level3Ability: dirtyRatAbility(3),
};

import { Ability, Trigger, Pet } from '..';
import { getPetIdentifiers } from '../database';

function boarAbility(level: number): Ability {
  const modifier = level * 2;
  return {
    description: `Before attack: Gain +${modifier}/+${modifier}.`,
    trigger: Trigger.BeforeAttack,
    triggeredBy: {
      kind: 'Self',
    },
    effect: {
      kind: 'ModifyStats',
      target: {
        kind: 'Self',
      },
      attackAmount: modifier,
      healthAmount: modifier,
      untilEndOfBattle: false,
    },
  };
}

export const boar: Pet = {
  ...getPetIdentifiers('boar'),
  image: {
    source: 'noto-emoji',
    commit: 'e022fd6573782431ac9a65b520376b57511c31cd',
    unicodeCodePoint: '\u{1F410}',
  },
  tier: 6,
  baseAttack: 10,
  baseHealth: 2,
  packs: ['StandardPack', 'ExpansionPack1'],
  level1Ability: boarAbility(1),
  level2Ability: boarAbility(2),
  level3Ability: boarAbility(3),
};

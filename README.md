# super-auto-pets-db

Super auto pets database is an un-official guide and reference for the game Super Auto Pets.

## Usage

- `npm start` will build the website and API in the `docs` directory.
- `npm run typescript` will build the website and API.
- `npm run css` will compile the tailwind styles.

### Navigating the project

- `src` - Code files used in the project
  - `database` - Files involved in building and populating the pets database.
  - `website` - Files involved in building the website.

## API

One goal of this project is to have all pets and food described as data so that they can be used and consumed by other applications.

For this reason we are also building an `api.json` file that other applications can use and consume.

The JSON follows the following schema:

```typescript
export type Pack = "StandardPack" | "ExpansionPack1";

export interface Pet {
  // The name of the pet.
  name: String;
  // The tier the pet appears in.
  tier: number;
  // The standard starting attack points for the pet.
  baseAttack: number;
  // The standard starting health points for the pet.
  baseHealth: number;
  // Which packs the pet appears in.
  packs?: Pack[];
  // The ability the pet has at level 1.
  level1Ability?: Ability;
  // The ability the pet has at level 2.
  level2Ability?: Ability;
  // The ability the pet has at level 3.
  level3Ability?: Ability;
}

export interface Ability {
  // The text description of the ability.
  description: string;
  // What behaviour (by the trigger entity) will initiate the ability.
  trigger: Trigger;
  // Which entity will trigger the effect.
  triggeredBy: Target;
  // What the effect does.
  effect: Effect;
}
```

The purpose of the extra information on the `Ability` type is so that in the future we could do things like:

- Generate more detailed/precise descriptions for what each ability does.
- Allow filtering on things like "pets that spawn other pets".

This extra ability information is still subject to change as the data model becomes clearer. Check out `src/database/index.ts` to get a better idea of how this information is structured.

import { Pet, Food, Status, Identifiers, Turn } from "./index";

export type Table<TIdentifiers extends Identifiers> = {
  [id: string]: TIdentifiers;
};

export interface Database {
  pets: Table<Pet>;
  foods: Table<Food>;
  statuses: Table<Status>;
  turns: Table<Turn>;
}

export function serialiseDatabase(db: Database): string {
  return JSON.stringify(db, null, 2);
}

export function deserialiseDatabase(content: string): Database {
  return JSON.parse(content);
}

export type PetRef = `pet-${string}`;
export type FoodRef = `food-${string}`;
export type StatusRef = `status-${string}`;
export type TurnRef = `turn-${string}`;

export function getPetId(pet: Pet | string): PetRef {
  let name = typeof pet == "string" ? pet : pet.name;
  return `pet-${sanitiseName(name)}`;
}

export function getPetUrl(pet: Pet, hostname?: string) {
  return `${hostname || ""}/pet/${sanitiseName(pet.name)}`;
}

export function getFoodId(food: Food | string): FoodRef {
  let name = typeof food == "string" ? food : food.name;
  return `food-${sanitiseName(name)}`;
}

export function getFoodUrl(food: Food, hostname?: string) {
  return `${hostname || ""}/food/${sanitiseName(food.name)}`;
}

export function getStatusId(status: Status | string): StatusRef {
  let name = typeof status == "string" ? status : status.name;
  return `status-${sanitiseName(name)}`;
}

export function getTurnId(turn: Turn | string): TurnRef {
  let name = sanitiseName(typeof turn == "string" ? turn : turn.name);
  return name.indexOf("turn-") === 0 ? (name as TurnRef) : `turn-${name}`;
}

export function enumerateTable<TIdentifiers extends Identifiers>(
  table: Table<TIdentifiers>
): TIdentifiers[] {
  return Object.entries(table).map((it) => it[1]);
}

export function sanitiseName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^a-z0-9\-]/gim, "");
}

export function getPetIdentifiers(name: string): { id: PetRef } & Identifiers {
  return {
    name,
    id: getPetId(name),
  };
}

export function getFoodIdentifiers(
  name: string
): { id: FoodRef } & Identifiers {
  return {
    name,
    id: getFoodId(name),
  };
}

export function getStatusIdentifiers(
  name: string
): { id: StatusRef } & Identifiers {
  return {
    name,
    id: getStatusId(name),
  };
}

export function getTurnIdentifiers(
  name: string
): { id: TurnRef } & Identifiers {
  return {
    name,
    id: getTurnId(name),
  };
}

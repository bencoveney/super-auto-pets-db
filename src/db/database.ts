import { Pet, Food, Status, Identifiers } from "./index";

export type Table<TIdentifiers extends Identifiers> = {
  [id: string]: TIdentifiers;
};

export interface Database {
  pets: Table<Pet>;
  foods: Table<Food>;
  statuses: Table<Status>;
}

export function serialiseDatabase(db: Database): string {
  return JSON.stringify(db, null, 2);
}

export function deserialiseDatabase(content: string): Database {
  return JSON.parse(content);
}

export function getPetId(pet: Pet | string) {
  let name = typeof pet == "string" ? pet : pet.name;
  return `pet_${sanitiseName(name)}`;
}

export function getPetUrl(pet: Pet) {
  return `/pet/${sanitiseName(pet.name)}`;
}

export function getFoodId(food: Food | string) {
  let name = typeof food == "string" ? food : food.name;
  return `food_${sanitiseName(name)}`;
}

export function getFoodUrl(food: Food) {
  return `/food/${sanitiseName(food.name)}`;
}

export function getStatusId(status: Status | string) {
  let name = typeof status == "string" ? status : status.name;
  return `status_${sanitiseName(name)}`;
}

export function getStatusUrl(status: Status) {
  return `/status/${sanitiseName(status.name)}`;
}

export function enumerateTable<TIdentifiers extends Identifiers>(
  table: Table<TIdentifiers>
): TIdentifiers[] {
  return Object.entries(table).map((it) => it[1]);
}

export function sanitiseName(name: string): string {
  return name.toLowerCase().replace(/\s/g, "_");
}

export function getPetIdentifiers(name: string): Identifiers {
  return {
    name,
    id: getPetId(name),
  };
}

export function getFoodIdentifiers(name: string): Identifiers {
  return {
    name,
    id: getFoodId(name),
  };
}

export function getStatusIdentifiers(name: string): Identifiers {
  return {
    name,
    id: getStatusId(name),
  };
}

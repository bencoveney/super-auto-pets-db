import { useEffect } from "react";
import { Food, Pet } from "../../db";

export function useTitle(title: string) {
  return useEffect(() => {
    document.title = title;
  });
}

export function getHomepageTitle() {
  return "Super Auto Pets List";
}

export function getPetPageTitle(pet: Pet) {
  return `${pet.name}: Stats and Abilities`;
}

export function getFoodPageTitle(food: Food) {
  return `${food.name}: Stats and Effects`;
}

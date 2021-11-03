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
  return `${pet.name}'s Stats and Abilities | Super Auto Pets List`;
}

export function getFoodPageTitle(food: Food) {
  return `${food.name}'s Stats and Effects | Super Auto Pets List`;
}

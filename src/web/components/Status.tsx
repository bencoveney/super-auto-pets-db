import React from "react";
import { StatusEffect } from "../../db";

export function Status(props: { status?: StatusEffect }) {
  if (!props.status) {
    return null;
  }
  return <div className="italic">{getStatusDescription(props.status)}</div>;
}

function getStatusDescription(status: StatusEffect) {
  switch (status.name) {
    case "Weak":
      return "Weak: Take 5 extra damage.";
    case "CoconutShield":
      return "Coconut Shield: Ignore damage once.";
    case "HoneyBee":
      return "Honey Bee: Summon a 1/1 Bee after fainting.";
    case "BoneAttack":
      return "Bone Attack: Attack for 5 more damage.";
    case "GarlicArmor":
      return "Garlic Armor: Take 2 less damage.";
    case "SplashAttack":
      return "Splash Attack: Attack second enemy for 5 damage.";
    case "MelonArmor":
      return "Melon Armor: Take 20 damage less, once.";
    case "ExtraLife":
      return "Extra Life: Come back as a 1/1 after fainting";
    case "SteakAttack":
      return "Steak Attack: Attack for 20 more damage, once.";
    case "PoisinAttack":
      return "Poisin Attack: Knock out any animal hit by this.";
    default:
      throw new Error(`Unknown status: ${status.name}`);
  }
}

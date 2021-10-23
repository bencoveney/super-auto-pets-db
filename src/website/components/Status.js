"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const react_1 = __importDefault(require("react"));
function Status(props) {
    return (react_1.default.createElement("div", { className: "p-3 border-t border-gray-500 text-gray-200 italic" }, getStatusDescription(props.status)));
}
exports.Status = Status;
function getStatusDescription(status) {
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

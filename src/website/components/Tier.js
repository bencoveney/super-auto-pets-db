"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tier = void 0;
const react_1 = __importDefault(require("react"));
const Tiles_1 = require("./Tiles");
function Tier(props) {
    return (react_1.default.createElement("div", { key: props.tier },
        react_1.default.createElement("h2", { className: "px-3 text-xl font-medium sticky block top-0 z-10 bg-gray-800 py-2" }, getTierName(props.tier)),
        react_1.default.createElement(Tiles_1.Tiles, { pets: props.pets, food: props.food })));
}
exports.Tier = Tier;
function getTierName(tier) {
    switch (tier) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return `Tier ${tier}`;
        case "Summoned":
            return "Summoned";
        default:
            throw new Error(`Unknown tier: ${tier}`);
    }
}

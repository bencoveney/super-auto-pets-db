"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tier = void 0;
const react_1 = __importDefault(require("react"));
const List_1 = require("./List");
function Tier(props) {
    return (react_1.default.createElement("div", { key: props.tier, className: "py-3" },
        react_1.default.createElement("h2", { className: "px-3 text-xl font-medium" }, getTierName(props.tier)),
        react_1.default.createElement(List_1.List, { pets: props.pets, food: props.food })));
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

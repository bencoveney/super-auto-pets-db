"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const react_1 = __importDefault(require("react"));
const Pet_1 = require("./Pet");
const Food_1 = require("./Food");
function List(props) {
    return (react_1.default.createElement("div", { className: "grid grid-cols-list gap-4 m-4 justify-items-stretch" },
        props.pets.map((pet, index) => (react_1.default.createElement(Pet_1.Pet, { key: `pet${index}`, pet: pet }))),
        props.food.map((food, index) => (react_1.default.createElement(Food_1.Food, { key: `food${index}`, food: food })))));
}
exports.List = List;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const react_1 = __importDefault(require("react"));
const Pack_1 = require("./Pack");
function Food(props) {
    return (react_1.default.createElement("div", { className: "bg-gray-700 rounded-xl shadow-md flex flex-col items-stretch justify-start" },
        react_1.default.createElement("div", { className: "p-3 flex flex-row justify-between" },
            react_1.default.createElement("div", { className: "text-xl font-medium" }, props.food.name)),
        react_1.default.createElement("img", { className: "mx-20", src: `assets/${props.food.name.toLowerCase().replace(/\s/g, "_")}.svg` }),
        react_1.default.createElement("div", { className: "p-3" }, (props.food.packs || []).map((pack, index) => (react_1.default.createElement(Pack_1.Pack, { pack: pack, key: index, colored: true })))),
        props.food.notes ? (react_1.default.createElement("div", { className: "p-3 border-t border-gray-500 text-gray-200 italic" }, props.food.notes)) : null,
        props.food.ability ? react_1.default.createElement(Ability, { ability: props.food.ability }) : null));
}
exports.Food = Food;
function Ability(props) {
    return (react_1.default.createElement("div", { className: "p-3 border-t border-gray-500 text-gray-200" }, props.ability.description));
}

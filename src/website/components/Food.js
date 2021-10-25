"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../utils");
const Pack_1 = require("./Pack");
const Status_1 = require("./Status");
const Polaroid_1 = require("./Polaroid");
function Food(props) {
    return (react_1.default.createElement("div", { className: "bg-gray-700 rounded-xl shadow-md flex flex-col items-stretch justify-start max-w-sm mx-auto my-5" },
        react_1.default.createElement("div", { className: "p-3 flex flex-row justify-between" },
            react_1.default.createElement("div", { className: "text-xl font-medium" }, props.food.name)),
        react_1.default.createElement("img", { className: "mx-20", src: `/assets/${(0, utils_1.sanitiseName)(props.food.name)}.svg` }),
        react_1.default.createElement("div", { className: "p-3" }, (props.food.packs || []).map((pack, index) => (react_1.default.createElement(Pack_1.Pack, { pack: pack, key: index, colored: true, condensed: false })))),
        props.food.notes ? (react_1.default.createElement("div", { className: "p-3 border-t border-gray-500 text-gray-200 italic" }, props.food.notes)) : null,
        props.food.ability ? react_1.default.createElement(Ability, { ability: props.food.ability }) : null,
        react_1.default.createElement(Polaroid_1.Polaroid, { name: props.food.name, background: "bgimage-4" })));
}
exports.Food = Food;
function Ability(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "p-3 border-t border-gray-500 text-gray-200" }, props.ability.description),
        props.ability.effect.kind == "ApplyStatus" ? (react_1.default.createElement(Status_1.Status, { status: props.ability.effect.status })) : null));
}

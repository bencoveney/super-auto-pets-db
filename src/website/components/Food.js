"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const react_1 = __importDefault(require("react"));
const Pack_1 = require("./Pack");
const Status_1 = require("./Status");
const Polaroid_1 = require("./Polaroid");
function Food(props) {
    return (react_1.default.createElement("div", { className: "m-3" },
        react_1.default.createElement("div", { className: "flex flex-col lg:flex-row-reverse items-center lg:items-start justify-start lg:justify-center" },
            react_1.default.createElement("div", { className: "flex-grow max-w-xs w-80" },
                react_1.default.createElement(Polaroid_1.Polaroid, { name: props.food.name, background: "bgimage-4" })),
            react_1.default.createElement("div", { className: "text-xl flex-grow grid grid-cols-keyvalue gap-2 max-w-4xl items-baseline" },
                react_1.default.createElement(SectionTitle, { text: "Stats" }),
                react_1.default.createElement(RowLabel, { text: "Name" }),
                react_1.default.createElement("div", { className: "font-medium" }, props.food.name),
                react_1.default.createElement(RowLabel, { text: "Packs" }),
                react_1.default.createElement("div", null, (props.food.packs || []).map((pack, index) => (react_1.default.createElement(Pack_1.Pack, { pack: pack, key: index, colored: true, condensed: false })))),
                props.food.notes ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(RowLabel, { text: "Notes" }),
                    react_1.default.createElement("div", { className: "italic" }, props.food.notes))) : null,
                react_1.default.createElement(SectionTitle, { text: "Abilities" }),
                props.food.ability ? react_1.default.createElement(Ability, { ability: props.food.ability }) : null))));
}
exports.Food = Food;
function SectionTitle(props) {
    return (react_1.default.createElement("div", { className: "col-span-2 mt-4 border-b border-gray-500 text-2xl font-light" },
        props.text,
        ":"));
}
function RowLabel(props) {
    return react_1.default.createElement("div", { className: "font-bold text-base text-gray-300" },
        props.text,
        ":");
}
function Ability(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(RowLabel, { text: "Effect" }),
        react_1.default.createElement("div", null, props.ability.description),
        props.ability.effect.kind == "ApplyStatus" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(RowLabel, { text: "Status" }),
            react_1.default.createElement(Status_1.Status, { status: props.ability.effect.status }))) : null));
}

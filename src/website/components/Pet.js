"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
var react_1 = __importDefault(require("react"));
function Pet(props) {
    return (react_1.default.createElement("div", { className: "bg-white rounded-xl shadow-md flex flex-col items-stretch justify-start" },
        react_1.default.createElement("div", { className: "p-3 flex flex-row justify-between" },
            react_1.default.createElement("div", { className: "text-xl font-medium text-black" }, props.pet.name),
            react_1.default.createElement("div", { className: "" },
                "\u2694\uFE0F ",
                props.pet.baseAttack,
                " / \uD83D\uDC96 ",
                props.pet.baseHp)),
        react_1.default.createElement("div", { className: "p-3" }, (props.pet.packs || []).map(function (pack, index) { return (react_1.default.createElement("span", { key: index, className: "inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700" }, pack)); })),
        props.pet.level1Ability ? (react_1.default.createElement(Ability, { level: 1, ability: props.pet.level1Ability })) : null,
        props.pet.level2Ability ? (react_1.default.createElement(Ability, { level: 2, ability: props.pet.level2Ability })) : null,
        props.pet.level3Ability ? (react_1.default.createElement(Ability, { level: 3, ability: props.pet.level3Ability })) : null));
}
exports.Pet = Pet;
function Ability(props) {
    return (react_1.default.createElement("div", { className: "text-gray-500 p-3 border-t" },
        LevelLabel(props.level),
        " ",
        props.ability.description));
}
function LevelLabel(level) {
    switch (level) {
        case 1:
            return "1️⃣";
        case 2:
            return "2️⃣";
        case 3:
            return "3️⃣";
        default:
            return "❗";
    }
}

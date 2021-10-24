"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../utils");
const Pack_1 = require("./Pack");
const Status_1 = require("./Status");
function Pet(props) {
    return (react_1.default.createElement("div", { className: "bg-gray-900 rounded-xl shadow-md flex flex-col items-stretch justify-start max-w-sm mx-auto my-5" },
        react_1.default.createElement("div", { className: "p-3 flex flex-row justify-between" },
            react_1.default.createElement("div", { className: "text-xl font-medium" }, props.pet.name),
            react_1.default.createElement("div", { className: "" },
                "\u2694\uFE0F ",
                props.pet.baseAttack,
                " / \uD83D\uDC96 ",
                props.pet.baseHealth)),
        react_1.default.createElement("img", { className: "mx-20", src: `/assets/${(0, utils_1.sanitiseName)(props.pet.name)}.svg` }),
        react_1.default.createElement("div", { className: "p-3" }, (props.pet.packs || []).map((pack, index) => (react_1.default.createElement(Pack_1.Pack, { pack: pack, key: index, colored: true, condensed: false })))),
        props.pet.notes ? (react_1.default.createElement("div", { className: "p-3 border-t border-gray-700 text-gray-200 italic" }, props.pet.notes)) : null,
        props.pet.level1Ability ? (react_1.default.createElement(Ability, { level: 1, ability: props.pet.level1Ability })) : null,
        props.pet.level2Ability ? (react_1.default.createElement(Ability, { level: 2, ability: props.pet.level2Ability })) : null,
        props.pet.level3Ability ? (react_1.default.createElement(Ability, { level: 3, ability: props.pet.level3Ability })) : null,
        !!props.pet.status ? react_1.default.createElement(Status_1.Status, { status: props.pet.status }) : null));
}
exports.Pet = Pet;
function Ability(props) {
    return (react_1.default.createElement("div", { className: "p-3 border-t border-gray-700 text-gray-200" },
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

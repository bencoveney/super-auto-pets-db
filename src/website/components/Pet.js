"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const react_1 = __importDefault(require("react"));
const Polaroid_1 = require("./Polaroid");
const Pack_1 = require("./Pack");
const Status_1 = require("./Status");
function Pet(props) {
    return (react_1.default.createElement("div", { className: "m-3" },
        react_1.default.createElement("div", { className: "flex flex-row-reverse items-stretch justify-start" },
            react_1.default.createElement("div", { className: "flex-grow max-w-sm" },
                react_1.default.createElement(Polaroid_1.Polaroid, { name: props.pet.name, background: "bgimage-1" })),
            react_1.default.createElement("div", { className: "text-xl flex-grow grid grid-cols-keyvalue gap-2" },
                react_1.default.createElement("div", null, "Name:"),
                react_1.default.createElement("div", { className: "font-medium" }, props.pet.name),
                react_1.default.createElement("div", null, "Attack:"),
                react_1.default.createElement(StatDisplay, { stat: props.pet.baseAttack, emoji: "\u2694\uFE0F" }),
                react_1.default.createElement("div", null, "Health:"),
                react_1.default.createElement(StatDisplay, { stat: props.pet.baseHealth, emoji: "\uD83D\uDC96" }),
                react_1.default.createElement("div", null, "Packs:"),
                react_1.default.createElement("div", null, (props.pet.packs || []).map((pack, index) => (react_1.default.createElement(Pack_1.Pack, { pack: pack, key: index, colored: true, condensed: false })))),
                props.pet.notes ? (react_1.default.createElement("div", { className: "col-span-2 border-t border-gray-700 text-gray-200 italic" }, props.pet.notes)) : null,
                props.pet.level1Ability ? (react_1.default.createElement(Ability, { level: 1, ability: props.pet.level1Ability })) : null,
                props.pet.level2Ability ? (react_1.default.createElement(Ability, { level: 2, ability: props.pet.level2Ability })) : null,
                props.pet.level3Ability ? (react_1.default.createElement(Ability, { level: 3, ability: props.pet.level3Ability })) : null,
                !!props.pet.status ? react_1.default.createElement(Status_1.Status, { status: props.pet.status }) : null))));
}
exports.Pet = Pet;
function StatDisplay(props) {
    if (typeof props.stat == "string") {
        return react_1.default.createElement("div", null, props.stat);
    }
    return (react_1.default.createElement("div", null,
        props.stat,
        " ",
        props.emoji.repeat(props.stat)));
}
function Ability(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            "Level ",
            props.level,
            " Ability:"),
        react_1.default.createElement("div", null,
            LevelLabel(props.level),
            " ",
            props.ability.description)));
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

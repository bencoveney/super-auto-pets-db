"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var react_1 = __importDefault(require("react"));
var Pet_1 = require("./Pet");
function List(props) {
    return (react_1.default.createElement("div", { className: "grid grid-cols-list gap-4 m-4 justify-items-stretch" }, props.pets.map(function (pet, index) { return (react_1.default.createElement(Pet_1.Pet, { key: index, pet: pet })); })));
}
exports.List = List;

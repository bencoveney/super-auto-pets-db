"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetPage = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Pet_1 = require("./Pet");
function PetPage(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home"),
        react_1.default.createElement(Pet_1.Pet, { pet: props.pet })));
}
exports.PetPage = PetPage;

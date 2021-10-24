"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetPage = void 0;
const react_1 = __importDefault(require("react"));
const Breadcrumbs_1 = require("./Breadcrumbs");
const Header_1 = require("./Header");
const Pet_1 = require("./Pet");
function PetPage(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.Header, null,
            react_1.default.createElement(Breadcrumbs_1.Breadcrumbs, Object.assign({}, props))),
        react_1.default.createElement(Pet_1.Pet, { pet: props.pet })));
}
exports.PetPage = PetPage;

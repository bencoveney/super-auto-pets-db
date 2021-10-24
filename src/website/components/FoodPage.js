"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodPage = void 0;
const react_1 = __importDefault(require("react"));
const Breadcrumbs_1 = require("./Breadcrumbs");
const Food_1 = require("./Food");
const Header_1 = require("./Header");
function FoodPage(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.Header, null,
            react_1.default.createElement(Breadcrumbs_1.Breadcrumbs, Object.assign({}, props))),
        react_1.default.createElement(Food_1.Food, { food: props.theFood })));
}
exports.FoodPage = FoodPage;

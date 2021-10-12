"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var react_1 = __importDefault(require("react"));
var Blurb_1 = require("./Blurb");
var List_1 = require("./List");
function Page(props) {
    var tiers = [1, 2, 3, 4, 5, 6].map(function (tier) {
        return props.pets.filter(function (pet) { return pet.tier == tier; });
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", { className: "p-3 text-2xl font-medium text-black" }, "Super Auto Pets Database"),
        tiers.map(function (tier, index) { return (react_1.default.createElement("div", { key: index, className: "py-3" },
            react_1.default.createElement("h2", { className: "px-3 text-xl font-medium text-black" },
                "Tier ",
                index + 1),
            react_1.default.createElement(List_1.List, { pets: tier }))); }),
        react_1.default.createElement(Blurb_1.Blurb, null)));
}
exports.Page = Page;

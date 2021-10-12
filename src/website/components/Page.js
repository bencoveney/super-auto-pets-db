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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(List_1.List, { pets: props.pets }),
        react_1.default.createElement(Blurb_1.Blurb, null)));
}
exports.Page = Page;

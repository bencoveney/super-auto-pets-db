"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
function Header(props) {
    return (react_1.default.createElement("div", { className: "p-3 flex flex-col lg:flex-row justify-between items-center" }, props.children));
}
exports.Header = Header;

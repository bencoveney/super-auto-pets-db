"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatDisplay = void 0;
const react_1 = __importDefault(require("react"));
function StatDisplay(props) {
    if (typeof props.stat == "string") {
        return react_1.default.createElement("div", null, props.stat);
    }
    return (react_1.default.createElement("div", null,
        props.stat,
        " ",
        props.emoji.repeat(props.stat)));
}
exports.StatDisplay = StatDisplay;

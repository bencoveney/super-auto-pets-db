"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pack = void 0;
const react_1 = __importDefault(require("react"));
function Pack(props) {
    let packInfo = {
        StandardPack: {
            color: "bg-blue-900",
            name: "Standard",
            nameCondensed: "Std",
        },
        ExpansionPack1: {
            color: "bg-purple-800",
            name: "Expansion 1",
            nameCondensed: "Exp 1",
        },
        EasterEgg: {
            color: "bg-yellow-800",
            name: "Rare Easter Egg",
            nameCondensed: "Rare",
        },
    }[props.pack];
    const color = props.colored ? packInfo.color : "bg-grey-700";
    const text = props.condensed ? packInfo.nameCondensed : packInfo.name;
    const styles = props.condensed
        ? "rounded px-2 mr-1 text-sm"
        : "rounded px-3 py-1 mr-2 text-sm";
    return (react_1.default.createElement("span", { className: `inline-block font-semibold ${styles} ${color}` }, text));
}
exports.Pack = Pack;

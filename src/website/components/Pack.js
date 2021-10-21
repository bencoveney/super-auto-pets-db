"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pack = void 0;
const react_1 = __importDefault(require("react"));
function Pack(props) {
    let packInfo = {
        StandardPack: { color: "bg-blue-900", name: "Standard" },
        ExpansionPack1: { color: "bg-purple-800", name: "Expansion 1" },
        EasterEgg: { color: "bg-yellow-800", name: "Rare Easter Egg" },
    }[props.pack];
    const color = props.colored ? packInfo.color : "bg-grey-700";
    return (react_1.default.createElement("span", { className: `inline-block rounded-full px-3 py-1 mr-2 text-sm font-semibold ${color}` }, packInfo.name));
}
exports.Pack = Pack;

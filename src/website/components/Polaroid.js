"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polaroid = void 0;
const react_1 = __importDefault(require("react"));
function Polaroid({ id, name, background, }) {
    return (react_1.default.createElement("div", { className: "bg-white shadow p-3 m-4 transform rotate-3" },
        react_1.default.createElement("div", { className: "relative" },
            react_1.default.createElement("div", { className: `absolute bottom-0 left-0 top-0 right-0 bg-${background}-2 bg-cover` }),
            react_1.default.createElement("div", { className: "p-3" },
                react_1.default.createElement("img", { className: "filter drop-shadow-tile", src: `/assets/${id}.svg` })),
            react_1.default.createElement("div", { className: `absolute bottom-0 left-0 top-0 right-0 bg-${background}-1 bg-cover` })),
        react_1.default.createElement("div", { className: "text-center text-black mt-2 italic text-xl" },
            "My ",
            name,
            "!")));
}
exports.Polaroid = Polaroid;

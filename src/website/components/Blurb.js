"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blurb = void 0;
var react_1 = __importDefault(require("react"));
function Blurb() {
    return (react_1.default.createElement("div", { className: "grid grid-cols-2 gap-4 m-4 justify-items-stretch" },
        react_1.default.createElement("div", { className: "bg-white rounded-xl shadow-md p-3" },
            react_1.default.createElement("h2", { className: "text-xl font-medium text-black" }, "About this site"),
            react_1.default.createElement("p", { className: "text-gray-500" }, "This is an un-official guide and reference for the game Super Auto Pets.")),
        react_1.default.createElement("div", { className: "bg-white rounded-xl shadow-md p-3" },
            react_1.default.createElement("h2", { className: "text-xl font-medium text-black" }, "API"),
            react_1.default.createElement("p", { className: "text-gray-500" }, "The data used to power this site can be read/consumed from `api.json`. It would be a good idea to use best practices such as caching this data when using it."))));
}
exports.Blurb = Blurb;

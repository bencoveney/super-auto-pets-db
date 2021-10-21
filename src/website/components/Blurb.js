"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blurb = void 0;
const react_1 = __importDefault(require("react"));
function Blurb() {
    return (react_1.default.createElement("div", { className: "grid grid-cols-2 gap-4 m-4 justify-items-stretch" },
        react_1.default.createElement("div", { className: "bg-white rounded-xl shadow-md p-3" },
            react_1.default.createElement("h2", { className: "text-xl font-medium text-black" }, "About this site"),
            react_1.default.createElement("p", { className: "text-gray-500 mt-2" }, "This database website is an un-official guide and reference for the pets, food and stats from the game Super Auto Pets."),
            react_1.default.createElement("p", { className: "text-gray-500 mt-2" },
                "If you find any issues or would like to make a contribution, please raise an issue in the",
                " ",
                react_1.default.createElement("a", { className: "text-blue-600 visited:text-purple-600 underline", href: "https://github.com/bencoveney/super-auto-pets-db" }, "Github Repository"))),
        react_1.default.createElement("div", { className: "bg-white rounded-xl shadow-md p-3" },
            react_1.default.createElement("h2", { className: "text-xl font-medium text-black" }, "API"),
            react_1.default.createElement("p", { className: "text-gray-500 mt-2" },
                "The data used to power this site can be read/consumed from",
                " ",
                react_1.default.createElement("a", { className: "text-blue-600 visited:text-purple-600 underline", href: "./api.json" }, "api.json"),
                "."))));
}
exports.Blurb = Blurb;

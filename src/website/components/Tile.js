"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../utils");
const Pack_1 = require("./Pack");
function Tile({ name, stats, packs, background, }) {
    return (react_1.default.createElement("div", { className: "transition group bg-gray-900 hover:bg-black shadow-md flex flex-col items-stretch justify-start max-w-sm cursor-pointer" },
        react_1.default.createElement("div", { className: "relative" },
            react_1.default.createElement("div", { className: `transition absolute bottom-0 left-0 top-0 right-0 bg-${background}-2 bg-cover filter contrast-75 brightness-25 group-hover:contrast-100 group-hover:brightness-100` }),
            react_1.default.createElement("img", { className: "transition-margin mx-7 my-7 group-hover:mx-3 group-hover:my-3 filter drop-shadow-tile", src: `/assets/${(0, utils_1.sanitiseName)(name)}.svg` }),
            react_1.default.createElement("div", { className: `transition absolute bottom-0 left-0 top-0 right-0 bg-${background}-1 bg-cover filter contrast-75 brightness-25 group-hover:contrast-100 group-hover:brightness-100` }),
            stats ? (react_1.default.createElement("div", { className: "absolute bottom-0 right-0 p-1" },
                "\u2694\uFE0F ",
                stats.attack,
                " / \uD83D\uDC96 ",
                stats.health)) : null),
        react_1.default.createElement("div", { className: "p-2" },
            react_1.default.createElement("div", { className: "text-xl font-medium pb-2" }, name),
            react_1.default.createElement("div", null, (packs || []).map((pack, index) => (react_1.default.createElement(Pack_1.Pack, { pack: pack, key: index, colored: true, condensed: true })))))));
}
exports.Tile = Tile;

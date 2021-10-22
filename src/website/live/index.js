"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Homepage_1 = require("../components/Homepage");
// Use the generated API.json
// We use const enums but they break esbuild.
// https://github.com/evanw/esbuild/issues/128
const api = __importStar(require("../../../docs/api.json"));
// As another consequence, cast to any to avoid TypeScript errors when changing API structure.
const pets = api.pets;
const food = api.food;
const reactRoot = document.getElementById("react-root");
if (!reactRoot) {
    throw new Error("Could not find react root");
}
react_dom_1.default.hydrate(react_1.default.createElement(Homepage_1.Homepage, { pets: pets, food: food }), reactRoot);

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
// Use the generated API.json
// We use const enums but they break esbuild.
// https://github.com/evanw/esbuild/issues/128
const api = __importStar(require("../../../docs/api.json"));
const database_1 = require("../../database");
// As another consequence, cast to any to avoid TypeScript errors when changing API structure.
const database = api;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Homepage_1 = require("../components/Homepage");
const react_router_dom_1 = require("react-router-dom");
const PetPage_1 = require("../components/PetPage");
const FoodPage_1 = require("../components/FoodPage");
const reactRoot = document.getElementById("react-root");
if (!reactRoot) {
    throw new Error("Could not find react root");
}
function PetPageWrapper(props) {
    const name = (0, database_1.getPetId)(props.match.params.petName);
    const pet = database.pets[name];
    if (!pet) {
        throw new Error(`Could not find pet ${name}`);
    }
    return react_1.default.createElement(PetPage_1.PetPage, { pet: pet, database: database });
}
function FoodPageWrapper(props) {
    const name = (0, database_1.getFoodId)(props.match.params.foodName);
    const food = database.foods[name];
    if (!food) {
        throw new Error(`Could not find ${name}`);
    }
    return react_1.default.createElement(FoodPage_1.FoodPage, { theFood: food, database: database });
}
react_dom_1.default.hydrate(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
        react_1.default.createElement(Homepage_1.Homepage, { database: database })),
    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/pet/:petName", component: PetPageWrapper }),
    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/food/:foodName", component: FoodPageWrapper })), reactRoot);

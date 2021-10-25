"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumbs = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const database_1 = require("../../database");
function PetBreadbrumb(props) {
    const name = (0, database_1.getPetId)(props.match.params.petName);
    const pet = props.database.pets[name];
    if (!pet) {
        throw new Error(`Could not find pet ${name}`);
    }
    return react_1.default.createElement(Breadbrumb, { name: pet.name, target: (0, database_1.getPetUrl)(pet) });
}
function FoodBreadbrumb(props) {
    const name = (0, database_1.getFoodId)(props.match.params.foodName);
    const food = props.database.foods[name];
    if (!food) {
        throw new Error(`Could not find ${name}`);
    }
    return react_1.default.createElement(Breadbrumb, { name: food.name, target: (0, database_1.getFoodUrl)(food) });
}
function Breadbrumb(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { className: "text-blue-500 font-bold inline-block mx-3" }, " // "),
        react_1.default.createElement(react_router_dom_1.Link, { className: "hover:text-blue-300", to: props.target }, props.name)));
}
function Breadcrumbs(props) {
    return (react_1.default.createElement("h1", { className: "text-2xl font-light" },
        react_1.default.createElement(react_router_dom_1.Route, { path: "/" },
            "\uD83D\uDCDA",
            " ",
            react_1.default.createElement(react_router_dom_1.Link, { className: "hover:text-blue-300", to: "/" }, "Super Auto Pets Database")),
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/pet/:petName", render: (routeProps) => (react_1.default.createElement(PetBreadbrumb, Object.assign({}, routeProps, { database: props.database }))) }),
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/food/:foodName", render: (routeProps) => (react_1.default.createElement(FoodBreadbrumb, Object.assign({}, routeProps, { database: props.database }))) })));
}
exports.Breadcrumbs = Breadcrumbs;

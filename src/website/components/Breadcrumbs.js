"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumbs = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const utils_1 = require("../../utils");
function PetBreadbrumb(props) {
    const petName = (0, utils_1.sanitiseName)(props.match.params.petName);
    const pet = props.pets.find((it) => (0, utils_1.sanitiseName)(it.name) == petName);
    if (!pet) {
        throw new Error(`Could not find pet ${petName}`);
    }
    return (react_1.default.createElement(Breadbrumb, { name: pet.name, target: `/pet/${props.match.params.petName}` }));
}
function FoodBreadbrumb(props) {
    const foodName = (0, utils_1.sanitiseName)(props.match.params.foodName);
    const theFood = props.food.find((it) => (0, utils_1.sanitiseName)(it.name) == foodName);
    if (!theFood) {
        throw new Error(`Could not find ${foodName}`);
    }
    return (react_1.default.createElement(Breadbrumb, { name: theFood.name, target: `/food/${props.match.params.foodName}` }));
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
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/pet/:petName", render: (routeProps) => (react_1.default.createElement(PetBreadbrumb, Object.assign({}, routeProps, { pets: props.pets }))) }),
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/food/:foodName", render: (routeProps) => (react_1.default.createElement(FoodBreadbrumb, Object.assign({}, routeProps, { food: props.food }))) })));
}
exports.Breadcrumbs = Breadcrumbs;

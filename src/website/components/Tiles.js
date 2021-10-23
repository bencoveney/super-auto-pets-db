"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiles = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const utils_1 = require("../../utils");
const Tile_1 = require("./Tile");
function Tiles(props) {
    const tiles = props.pets
        .map((pet, index) => react_1.default.createElement(PetTile, { key: `pet${index}`, pet: pet }))
        .concat(props.food.map((food, index) => (react_1.default.createElement(FoodTile, { key: `food${index}`, food: food }))));
    return (react_1.default.createElement("div", { className: "grid grid-cols-tiles gap-4 m-4 justify-items-stretch" }, tiles));
}
exports.Tiles = Tiles;
function FoodTile(props) {
    return (react_1.default.createElement(react_router_dom_1.Link, { to: `/food/${(0, utils_1.sanitiseName)(props.food.name)}` },
        react_1.default.createElement(Tile_1.Tile, { name: props.food.name, background: "bgimage-4", packs: props.food.packs || [] })));
}
function PetTile(props) {
    return (react_1.default.createElement(react_router_dom_1.Link, { to: `/pet/${(0, utils_1.sanitiseName)(props.pet.name)}` },
        react_1.default.createElement(Tile_1.Tile, { name: props.pet.name, background: "bgimage-1", packs: props.pet.packs || [], stats: { attack: props.pet.baseAttack, health: props.pet.baseHealth } })));
}

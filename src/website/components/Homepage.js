"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Homepage = void 0;
const react_1 = __importDefault(require("react"));
const database_1 = require("../../database");
const Blurb_1 = require("./Blurb");
const Breadcrumbs_1 = require("./Breadcrumbs");
const Header_1 = require("./Header");
const Tier_1 = require("./Tier");
const Filters_1 = require("./Filters");
const allPacks = ["StandardPack", "ExpansionPack1"];
function Homepage(props) {
    const [filters, setName, togglePack] = (0, Filters_1.useFilters)();
    let filteredPets = applyFilter((0, database_1.enumerateTable)(props.database.pets), filters.packs, filters.name);
    let filteredFoods = applyFilter((0, database_1.enumerateTable)(props.database.foods), filters.packs, filters.name);
    const tiers = [1, 2, 3, 4, 5, 6, "Summoned"]
        .map((tier) => ({
        tier: tier,
        pets: filteredPets.filter((pet) => pet.tier == tier),
        food: filteredFoods.filter((food) => food.tier == tier),
    }))
        .filter((tier) => tier.pets.length > 0 || tier.food.length > 0);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.Header, null,
            react_1.default.createElement(Breadcrumbs_1.Breadcrumbs, Object.assign({}, props)),
            react_1.default.createElement(Filters_1.Filters, { filters: filters, setName: setName, togglePack: togglePack })),
        tiers.map((tier) => (react_1.default.createElement(Tier_1.Tier, Object.assign({ key: tier.tier }, tier)))),
        react_1.default.createElement(Blurb_1.Blurb, null)));
}
exports.Homepage = Homepage;
function applyFilter(all, packsFilter, nameFilter) {
    let filtered = all.filter((it) => { var _a; return (_a = it.packs) === null || _a === void 0 ? void 0 : _a.some((pack) => packsFilter.includes(pack)); });
    if (nameFilter) {
        let sanitisedNameFilter = nameFilter.toLowerCase();
        filtered = filtered.filter((pet) => pet.name.toLowerCase().indexOf(sanitisedNameFilter) != -1);
    }
    return filtered;
}

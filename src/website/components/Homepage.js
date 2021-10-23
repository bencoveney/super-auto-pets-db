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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Homepage = void 0;
const react_1 = __importStar(require("react"));
const Blurb_1 = require("./Blurb");
const Pack_1 = require("./Pack");
const Tier_1 = require("./Tier");
const allPacks = ["StandardPack", "ExpansionPack1"];
function Homepage(props) {
    const [packsFilter, setPacksFilter] = (0, react_1.useState)(allPacks);
    const [nameFilter, setNameFilter] = (0, react_1.useState)("");
    let filteredPets = applyFilter(props.pets, packsFilter, nameFilter);
    let filteredFood = applyFilter(props.food, packsFilter, nameFilter);
    const tiers = [1, 2, 3, 4, 5, 6, "Summoned"]
        .map((tier) => ({
        tier: tier,
        pets: filteredPets.filter((pet) => pet.tier == tier),
        food: filteredFood.filter((food) => food.tier == tier),
    }))
        .filter((tier) => tier.pets.length > 0 || tier.food.length > 0);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "p-3 flex flex-col lg:flex-row justify-between items-center" },
            react_1.default.createElement("h1", { className: "text-2xl font-medium" }, "Super Auto Pets Database"),
            react_1.default.createElement("div", { className: "flex flex-col md:flex-row items-center" },
                react_1.default.createElement("input", { type: "search", className: "bg-gray-900 shadow rounded border-0 p-1", placeholder: "Search by name", value: nameFilter, onChange: (e) => setNameFilter(e.target.value) }),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { className: "p-3" }, "Include Packs:"),
                    allPacks.map((pack, index) => (react_1.default.createElement("a", { onClick: () => {
                            if (packsFilter.includes(pack)) {
                                setPacksFilter(packsFilter.filter((it) => it != pack));
                            }
                            else {
                                setPacksFilter(packsFilter.concat(pack));
                            }
                        }, key: index },
                        react_1.default.createElement(Pack_1.Pack, { pack: pack, colored: packsFilter.includes(pack) }))))))),
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

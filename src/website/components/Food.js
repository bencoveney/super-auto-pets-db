"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const react_1 = __importDefault(require("react"));
const Pack_1 = require("./Pack");
const Status_1 = require("./Status");
const Polaroid_1 = require("./Polaroid");
const StatsGrid_1 = require("./StatsGrid");
const AbilityDescription_1 = require("./AbilityDescription");
function Food(props) {
    return (react_1.default.createElement("div", { className: "m-3" },
        react_1.default.createElement("div", { className: "flex flex-col lg:flex-row-reverse items-center lg:items-start justify-start lg:justify-center" },
            react_1.default.createElement("div", { className: "flex-grow max-w-xs w-80" },
                react_1.default.createElement(Polaroid_1.Polaroid, { name: props.food.name, background: "bgimage-4" })),
            react_1.default.createElement(StatsGrid_1.StatsGrid, null,
                react_1.default.createElement(StatsGrid_1.StatsSummary, null, "Stats"),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Name" }, props.food.name),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Packs" }, (props.food.packs || []).map((pack, index) => (react_1.default.createElement(Pack_1.Pack, { pack: pack, key: index, colored: true, condensed: false })))),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Notes", className: "italic" }, props.food.notes),
                react_1.default.createElement(StatsGrid_1.StatsSummary, null, "Abilities"),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Effect" },
                    react_1.default.createElement(AbilityDescription_1.AbilityDescription, { ability: props.food.ability })),
                props.food.ability.effect.status && (react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Status" },
                    react_1.default.createElement(Status_1.Status, { status: props.food.ability.effect.status })))))));
}
exports.Food = Food;

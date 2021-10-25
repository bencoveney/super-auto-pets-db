"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const react_1 = __importDefault(require("react"));
const Polaroid_1 = require("./Polaroid");
const Pack_1 = require("./Pack");
const Status_1 = require("./Status");
const StatsGrid_1 = require("./StatsGrid");
const StatDisplay_1 = require("./StatDisplay");
const AbilityDescription_1 = require("./AbilityDescription");
function Pet(props) {
    return (react_1.default.createElement("div", { className: "m-3" },
        react_1.default.createElement("div", { className: "flex flex-col lg:flex-row-reverse items-center lg:items-start justify-start lg:justify-center" },
            react_1.default.createElement("div", { className: "flex-grow max-w-xs w-80" },
                react_1.default.createElement(Polaroid_1.Polaroid, { name: props.pet.name, background: "bgimage-1" })),
            react_1.default.createElement(StatsGrid_1.StatsGrid, null,
                react_1.default.createElement(StatsGrid_1.StatsSummary, null, "Stats"),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Name" }, props.pet.name),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Attack" },
                    react_1.default.createElement(StatDisplay_1.StatDisplay, { stat: props.pet.baseAttack, emoji: "\u2694\uFE0F" })),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Health" },
                    react_1.default.createElement(StatDisplay_1.StatDisplay, { stat: props.pet.baseHealth, emoji: "\uD83D\uDC96" })),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Packs" }, (props.pet.packs || []).map((pack, index) => (react_1.default.createElement(Pack_1.Pack, { pack: pack, key: index, colored: true, condensed: false })))),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Notes", className: "italic" }, props.pet.notes),
                react_1.default.createElement(StatsGrid_1.StatsSummary, null, "Abilities"),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Level 1" },
                    react_1.default.createElement(AbilityDescription_1.AbilityDescription, { ability: props.pet.level1Ability })),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Level 2" },
                    react_1.default.createElement(AbilityDescription_1.AbilityDescription, { ability: props.pet.level2Ability })),
                react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Level 3" },
                    react_1.default.createElement(AbilityDescription_1.AbilityDescription, { ability: props.pet.level3Ability })),
                props.pet.status && (react_1.default.createElement(StatsGrid_1.StatsRow, { text: "Status" },
                    react_1.default.createElement(Status_1.Status, { status: props.pet.status })))))));
}
exports.Pet = Pet;

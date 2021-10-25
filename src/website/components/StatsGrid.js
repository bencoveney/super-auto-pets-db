"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsRow = exports.StatsSummary = exports.StatsGrid = void 0;
const react_1 = __importDefault(require("react"));
function StatsGrid(props) {
    return (react_1.default.createElement("div", { className: "text-xl flex-grow grid grid-cols-keyvalue gap-2 max-w-4xl items-baseline" }, props.children));
}
exports.StatsGrid = StatsGrid;
function StatsSummary(props) {
    return (react_1.default.createElement("div", { className: "col-span-2 mt-4 border-b border-gray-500 text-2xl font-light" }, props.children));
}
exports.StatsSummary = StatsSummary;
function StatsRow(props) {
    if (!props.children) {
        //|| props.children.type() === null) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "font-bold text-base text-gray-300" },
            props.text,
            ":"),
        react_1.default.createElement("div", { className: props.className }, props.children)));
}
exports.StatsRow = StatsRow;

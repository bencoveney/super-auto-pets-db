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
exports.Filters = exports.useFilters = void 0;
const react_1 = __importStar(require("react"));
const Pack_1 = require("./Pack");
const allPacks = ["StandardPack", "ExpansionPack1"];
function useFilters() {
    const [packsFilter, setPacksFilter] = (0, react_1.useState)(allPacks);
    const togglePack = (0, react_1.useCallback)((pack) => {
        if (packsFilter.includes(pack)) {
            setPacksFilter(packsFilter.filter((it) => it != pack));
        }
        else {
            setPacksFilter(packsFilter.concat(pack));
        }
    }, [packsFilter, setPacksFilter]);
    const [nameFilter, setNameFilter] = (0, react_1.useState)("");
    return [{ name: nameFilter, packs: packsFilter }, setNameFilter, togglePack];
}
exports.useFilters = useFilters;
function Filters(props) {
    return (react_1.default.createElement("div", { className: "flex flex-col md:flex-row items-center" },
        react_1.default.createElement("input", { type: "search", className: "bg-gray-900 shadow rounded border-0 p-1", placeholder: "Search by name", value: props.filters.name, onChange: (e) => props.setName(e.target.value) }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("span", { className: "p-3" }, "Toggle Packs:"),
            allPacks.map((pack, index) => (react_1.default.createElement("a", { onClick: () => props.togglePack(pack), key: index },
                react_1.default.createElement(Pack_1.Pack, { pack: pack, colored: props.filters.packs.includes(pack), condensed: false })))))));
}
exports.Filters = Filters;

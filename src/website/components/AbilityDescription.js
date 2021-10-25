"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityDescription = void 0;
const react_1 = __importDefault(require("react"));
function AbilityDescription(props) {
    if (!props.ability) {
        return null;
    }
    return react_1.default.createElement("div", null, props.ability.description);
}
exports.AbilityDescription = AbilityDescription;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFoodPages = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const react_1 = __importDefault(require("react"));
const server_1 = __importDefault(require("react-dom/server"));
const Page_1 = require("../components/Page");
const FoodPage_1 = require("../components/FoodPage");
const utils_1 = require("../../utils");
const react_router_dom_1 = require("react-router-dom");
const writeFile_1 = require("./writeFile");
function writeFoodPages(outputDir, food) {
    return __awaiter(this, void 0, void 0, function* () {
        const foodPagesDir = path_1.default.resolve(outputDir, "food");
        if (!fs_1.default.existsSync(foodPagesDir)) {
            fs_1.default.mkdirSync(foodPagesDir, { recursive: true });
        }
        yield Promise.all(food.map((food) => writeFoodPage(foodPagesDir, food)));
    });
}
exports.writeFoodPages = writeFoodPages;
function writeFoodPage(outputDir, food) {
    return __awaiter(this, void 0, void 0, function* () {
        const pageName = (0, utils_1.sanitiseName)(food.name);
        yield (0, writeFile_1.writeToFile)(server_1.default.renderToStaticNodeStream(react_1.default.createElement(Page_1.Page, null,
            react_1.default.createElement(react_router_dom_1.StaticRouter, { location: { pathname: `/food/${pageName}` } },
                react_1.default.createElement(FoodPage_1.FoodPage, { food: food })))), path_1.default.resolve(outputDir, `${pageName}.html`));
    });
}

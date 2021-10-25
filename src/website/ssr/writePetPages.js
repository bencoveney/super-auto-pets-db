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
exports.writePetPages = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const react_1 = __importDefault(require("react"));
const server_1 = __importDefault(require("react-dom/server"));
const database_1 = require("../../database");
const Page_1 = require("../components/Page");
const PetPage_1 = require("../components/PetPage");
const react_router_dom_1 = require("react-router-dom");
const writeFile_1 = require("./writeFile");
function writePetPages(outputDir, database) {
    return __awaiter(this, void 0, void 0, function* () {
        const petPagesDir = path_1.default.resolve(outputDir, "pet");
        if (!fs_1.default.existsSync(petPagesDir)) {
            fs_1.default.mkdirSync(petPagesDir, { recursive: true });
        }
        yield Promise.all((0, database_1.enumerateTable)(database.pets).map((pet) => writePetPage(petPagesDir, pet, database)));
    });
}
exports.writePetPages = writePetPages;
function writePetPage(outputDir, pet, database) {
    return __awaiter(this, void 0, void 0, function* () {
        const pathname = (0, database_1.getPetUrl)(pet);
        yield (0, writeFile_1.writeToFile)(server_1.default.renderToStaticNodeStream(react_1.default.createElement(Page_1.Page, null,
            react_1.default.createElement(react_router_dom_1.StaticRouter, { location: { pathname } },
                react_1.default.createElement(PetPage_1.PetPage, { pet: pet, database: database })))), path_1.default.resolve(outputDir, `${path_1.default.posix.basename(pathname)}.html`));
    });
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeIndex = void 0;
const server_1 = __importDefault(require("react-dom/server"));
const react_1 = __importDefault(require("react"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Homepage_1 = require("../components/Homepage");
const Page_1 = require("../components/Page");
function writeIndex(outputDir, pets, food) {
    const content = server_1.default.renderToStaticNodeStream(react_1.default.createElement(Page_1.Page, null,
        react_1.default.createElement(Homepage_1.Homepage, { pets: pets, food: food })));
    const indexPath = path_1.default.resolve(outputDir, "index.html");
    const writeStream = fs_1.default.createWriteStream(indexPath);
    content.pipe(writeStream);
    writeStream.on("finish", () => console.log(`Wrote ${indexPath}`));
}
exports.writeIndex = writeIndex;

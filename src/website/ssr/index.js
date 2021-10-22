"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const writeIndex_1 = require("./writeIndex");
const writeAssets_1 = require("./writeAssets");
const database_1 = require("../../database");
const writeApi_1 = require("./writeApi");
function getOutputDir() {
    const outputDir = path_1.default.join(process.cwd(), "docs");
    if (!fs_1.default.existsSync(outputDir)) {
        fs_1.default.mkdirSync(outputDir, { recursive: true });
    }
    return outputDir;
}
const outputDir = getOutputDir();
const pets = (0, database_1.getPets)();
const food = (0, database_1.getFood)();
(0, writeApi_1.writeApi)(outputDir, pets, food);
(0, writeAssets_1.copyAssets)(outputDir, pets.concat(food));
(0, writeIndex_1.writeIndex)(outputDir, pets, food);

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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const writeHomepage_1 = require("./writeHomepage");
const writeAssets_1 = require("./writeAssets");
const database_1 = require("../../database");
const writeApi_1 = require("./writeApi");
const writePetPages_1 = require("./writePetPages");
const writeFoodPages_1 = require("./writeFoodPages");
function getOutputDir() {
    const outputDir = path_1.default.join(process.cwd(), "docs");
    if (!fs_1.default.existsSync(outputDir)) {
        fs_1.default.mkdirSync(outputDir, { recursive: true });
    }
    return outputDir;
}
function buildSite() {
    return __awaiter(this, void 0, void 0, function* () {
        const outputDir = getOutputDir();
        const database = (0, database_1.getDatabase)();
        (0, writeApi_1.writeApi)(outputDir, database);
        (0, writeAssets_1.copyAssets)(outputDir, database);
        yield (0, writeHomepage_1.writeHomepage)(outputDir, database);
        yield (0, writePetPages_1.writePetPages)(outputDir, database);
        yield (0, writeFoodPages_1.writeFoodPages)(outputDir, database);
    });
}
buildSite().then(() => console.log("Build succeeded"), (error) => {
    console.log(`Build failed: ${error.message || error}`);
    process.exit(1);
});

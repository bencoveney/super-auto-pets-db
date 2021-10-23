"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyAssets = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const writeBackgroundAssets_1 = require("./writeBackgroundAssets");
const writeEmojiAssets_1 = require("./writeEmojiAssets");
function copyAssets(outputDir, images) {
    const assetsDir = getAssetsDir(outputDir);
    (0, writeEmojiAssets_1.copyEmojiAssets)(assetsDir, images);
    (0, writeBackgroundAssets_1.copyBackgroundAssets)(assetsDir);
}
exports.copyAssets = copyAssets;
function getAssetsDir(outputDir) {
    const assetsDir = path_1.default.resolve(outputDir, "assets");
    if (!fs_1.default.existsSync(assetsDir)) {
        fs_1.default.mkdirSync(assetsDir, { recursive: true });
    }
    return assetsDir;
}

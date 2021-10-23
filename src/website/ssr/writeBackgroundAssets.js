"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyBackgroundAssets = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function copyBackgroundAssets(targetDir) {
    const backgroundsDir = path_1.default.resolve(process.cwd(), "./src/website/assets/backgrounds");
    fs_1.default.readdirSync(backgroundsDir).forEach((background) => {
        const sourcePath = path_1.default.resolve(backgroundsDir, background);
        const targetPath = path_1.default.resolve(targetDir, background);
        fs_1.default.copyFileSync(sourcePath, targetPath);
        console.log(`Wrote ${targetPath}`);
    });
}
exports.copyBackgroundAssets = copyBackgroundAssets;

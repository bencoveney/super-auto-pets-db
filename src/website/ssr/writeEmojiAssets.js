"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyEmojiAssets = void 0;
const fs_1 = __importDefault(require("fs"));
const emoji_unicode_1 = __importDefault(require("emoji-unicode"));
const path_1 = __importDefault(require("path"));
function copyEmojiAssets(targetDir, images) {
    images.forEach(({ name, image }) => {
        const assetPath = path_1.default.resolve(targetDir, `${name.toLowerCase().replace(/\s/g, "_")}.svg`);
        fs_1.default.copyFileSync(getEmojiPath(image), assetPath);
        console.log(`Wrote ${assetPath}`);
    });
}
exports.copyEmojiAssets = copyEmojiAssets;
function getEmojiPath(emoji) {
    switch (emoji.source) {
        case "fxemoji":
            return getFxEmojiPath(emoji);
        case "noto-emoji":
            return getNotoEmojiPath(emoji);
        case "twemoji":
            return getTwEmojiPath(emoji);
        default:
            throw new Error("Unknown emoji source");
    }
}
function getFxEmojiPath(emoji) {
    let unicodeValues = (0, emoji_unicode_1.default)(emoji.unicodeCodePoint).split(" ");
    return path_1.default.resolve(__dirname, "../../emoji/fxemoji/svgs/FirefoxEmoji/", `u${unicodeValues.join("_")}-${emoji.name}.svg`);
}
function getNotoEmojiPath(emoji) {
    let unicodeValues = (0, emoji_unicode_1.default)(emoji.unicodeCodePoint).split(" ");
    return path_1.default.resolve(__dirname, "../../emoji/noto-emoji/svg/", `emoji_u${unicodeValues.join("_")}.svg`);
}
function getTwEmojiPath(emoji) {
    let unicodeValues = (0, emoji_unicode_1.default)(emoji.unicodeCodePoint).split(" ");
    return path_1.default.resolve(__dirname, "../../emoji/twemoji/assets/svg/", `${unicodeValues.join("_")}.svg`);
}

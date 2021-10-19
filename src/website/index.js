"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeWebsite = void 0;
var server_1 = __importDefault(require("react-dom/server"));
var react_1 = __importDefault(require("react"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Page_1 = require("./components/Page");
var emoji_unicode_1 = __importDefault(require("emoji-unicode"));
function wrapAsPage(element) {
    return (react_1.default.createElement("html", { lang: "en" },
        react_1.default.createElement("head", null,
            react_1.default.createElement("meta", { charSet: "utf-8" }),
            react_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            react_1.default.createElement("title", null, "Super Auto Pets Database"),
            react_1.default.createElement("meta", { name: "description", content: "This database website is an un-official guide and reference for the pets, food and stats from the game Super Auto Pets." }),
            react_1.default.createElement("meta", { name: "author", content: "Ben Coveney" }),
            react_1.default.createElement("link", { rel: "stylesheet", href: "tailwind.css" })),
        react_1.default.createElement("body", { className: "bg-gray-200" }, element)));
}
function homepage(pets) {
    return wrapAsPage(react_1.default.createElement(Page_1.Page, { pets: pets }));
}
function writeAssets(outputDir, pets) {
    var assetsDir = path_1.default.resolve(outputDir, "assets");
    if (!fs_1.default.existsSync(assetsDir)) {
        fs_1.default.mkdirSync(assetsDir, { recursive: true });
    }
    pets.forEach(function (pet) {
        fs_1.default.copyFileSync(getEmojiPath(pet.image), path_1.default.resolve(assetsDir, pet.name.toLowerCase().replace(/\s/g, "_") + ".svg"));
    });
}
function writeWebsite(outputDir, pets) {
    var content = server_1.default.renderToStaticNodeStream(homepage(pets));
    writeAssets(outputDir, pets);
    var indexPath = path_1.default.resolve(outputDir, "index.html");
    var writeStream = fs_1.default.createWriteStream(indexPath);
    content.pipe(writeStream);
    writeStream.on("finish", function () { return console.log("wrote db"); });
}
exports.writeWebsite = writeWebsite;
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
    var unicodeValues = (0, emoji_unicode_1.default)(emoji.unicodeCodePoint).split(" ");
    return path_1.default.resolve(__dirname, "../emoji/fxemoji/svgs/FirefoxEmoji/", "u" + unicodeValues.join("_") + "-" + emoji.name + ".svg");
}
function getNotoEmojiPath(emoji) {
    var unicodeValues = (0, emoji_unicode_1.default)(emoji.unicodeCodePoint).split(" ");
    return path_1.default.resolve(__dirname, "../emoji/noto-emoji/svg/", "emoji_u" + unicodeValues.join("_") + ".svg");
}
function getTwEmojiPath(emoji) {
    var unicodeValues = (0, emoji_unicode_1.default)(emoji.unicodeCodePoint).split(" ");
    return path_1.default.resolve(__dirname, "../emoji/twemoji/assets/svg/", unicodeValues.join("_") + ".svg");
}

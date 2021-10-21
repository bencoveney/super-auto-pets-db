"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const react_1 = __importDefault(require("react"));
const server_1 = __importDefault(require("react-dom/server"));
function Page(props) {
    const content = server_1.default.renderToString(props.children);
    return (react_1.default.createElement("html", { lang: "en" },
        react_1.default.createElement("head", null,
            react_1.default.createElement("meta", { charSet: "utf-8" }),
            react_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            react_1.default.createElement("title", null, "Super Auto Pets Database"),
            react_1.default.createElement("meta", { name: "description", content: "This database website is an un-official guide and reference for the pets, food and stats from the game Super Auto Pets." }),
            react_1.default.createElement("meta", { name: "author", content: "Ben Coveney" }),
            react_1.default.createElement("link", { rel: "icon", type: "image/svg+xml", href: "/assets/turtle.svg" }),
            react_1.default.createElement("link", { rel: "stylesheet", href: "tailwind.css" })),
        react_1.default.createElement("body", { className: "bg-gray-800 text-white" },
            react_1.default.createElement("div", { id: "react-root", dangerouslySetInnerHTML: { __html: content } }),
            react_1.default.createElement("script", { src: "./bundle.js" }))));
}
exports.Page = Page;

import React from "react";
import ReactDOM from "react-dom";
import { Homepage } from "../components/Homepage";

// Use the generated API.json
// We use const enums but they break esbuild.
// https://github.com/evanw/esbuild/issues/128
import * as api from "../../../docs/api.json";
import { Food, Pet } from "../../database";
// As another consequence, cast to any to avoid TypeScript errors when changing API structure.
const pets = (api as any).pets as Pet[];
const food = (api as any).food as Food[];

const reactRoot = document.getElementById("react-root");
if (!reactRoot) {
  throw new Error("Could not find react root");
}
ReactDOM.hydrate(
  <Homepage pets={pets as any} food={food}></Homepage>,
  reactRoot
);

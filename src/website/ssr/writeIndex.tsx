import ReactDOMServer from "react-dom/server";
import React from "react";
import fs from "fs";
import path from "path";
import { Food, Pet } from "../../database";
import { Homepage } from "../components/Homepage";
import { Page } from "../components/Page";

export function writeIndex(outputDir: string, pets: Pet[], food: Food[]) {
  const content = ReactDOMServer.renderToStaticNodeStream(
    <Page>
      <Homepage pets={pets} food={food}></Homepage>
    </Page>
  );
  const indexPath = path.resolve(outputDir, "index.html");
  const writeStream = fs.createWriteStream(indexPath);
  content.pipe(writeStream);
  writeStream.on("finish", () => console.log(`Wrote ${indexPath}`));
}

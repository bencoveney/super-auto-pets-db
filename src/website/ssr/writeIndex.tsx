import ReactDOMServer from "react-dom/server";
import React from "react";
import fs from "fs";
import path from "path";
import { Pet } from "../../database";
import { Homepage } from "../components/Homepage";
import { Page } from "../components/Page";

export function writeIndex(outputDir: string, pets: Pet[]) {
  const content = ReactDOMServer.renderToStaticNodeStream(
    <Page>
      <Homepage pets={pets}></Homepage>
    </Page>
  );
  const indexPath = path.resolve(outputDir, "index.html");
  const writeStream = fs.createWriteStream(indexPath);
  content.pipe(writeStream);
  writeStream.on("finish", () => console.log(`Wrote ${indexPath}`));
}

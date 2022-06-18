import React from "react";
import fs from "fs";
import ReactDOMServer from "react-dom/server";

export async function writePage(content: React.ReactElement, filePath: string) {
  const rendered =
    "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(content);
  await fs.promises.writeFile(filePath, rendered);
  console.log(`Wrote ${filePath}`);
}

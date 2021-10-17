import ReactDOMServer from "react-dom/server";
import React from "react";
import fs from "fs";
import path from "path";
import { Pet } from "../database";
import { Page } from "./components/Page";

function wrapAsPage(element: React.ReactElement) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Super Auto Pets Database</title>
        <meta
          name="description"
          content="This database website is an un-official guide and reference for the pets, food and stats from the game Super Auto Pets."
        />
        <meta name="author" content="Ben Coveney" />
        <link rel="stylesheet" href="tailwind.css" />
      </head>

      <body className="bg-gray-200">{element}</body>
    </html>
  );
}

function homepage(pets: Pet[]) {
  return wrapAsPage(<Page pets={pets}></Page>);
}

export function writeWebsite(pets: Pet[]) {
  const content = ReactDOMServer.renderToStaticNodeStream(homepage(pets));

  const indexPath = path.resolve(process.cwd(), "docs", "index.html");
  const writeStream = fs.createWriteStream(indexPath);
  content.pipe(writeStream);
  writeStream.on("finish", () => console.log("wrote db"));
}

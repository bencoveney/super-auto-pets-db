import ReactDOMServer from "react-dom/server";
import React from "react";
import fs from "fs";
import path from "path";
import { Pet } from "../database";
import { Page } from "./components/Page";
import emojiUnicode from "emoji-unicode";

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

function writeAssets(outputDir: string, pets: Pet[]) {
  const assetsDir = path.resolve(outputDir, "assets");
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  pets.forEach((pet) => {
    console.log(pet.unicodeCodePoint);
    let unicodeValues: string[] = emojiUnicode(pet.unicodeCodePoint).split(" ");
    const emojiFile = path.resolve(
      __dirname,
      "../emoji/noto-emoji/svg/",
      `emoji_u${unicodeValues.join("_")}.svg`
    );
    const destFile = path.resolve(assetsDir, `${pet.name.toLowerCase()}.svg`);

    fs.copyFileSync(emojiFile, destFile);
  });
}

export function writeWebsite(outputDir: string, pets: Pet[]) {
  const content = ReactDOMServer.renderToStaticNodeStream(homepage(pets));
  writeAssets(outputDir, pets);
  const indexPath = path.resolve(outputDir, "index.html");
  const writeStream = fs.createWriteStream(indexPath);
  content.pipe(writeStream);
  writeStream.on("finish", () => console.log("wrote db"));
}

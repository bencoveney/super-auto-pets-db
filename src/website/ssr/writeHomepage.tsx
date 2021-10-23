import ReactDOMServer from "react-dom/server";
import React from "react";
import path from "path";
import { Food, Pet } from "../../database";
import { Homepage } from "../components/Homepage";
import { Page } from "../components/Page";
import { StaticRouter } from "react-router-dom";
import { writeToFile } from "./writeFile";

export async function writeHomepage(
  outputDir: string,
  pets: Pet[],
  food: Food[]
) {
  await writeToFile(
    ReactDOMServer.renderToStaticNodeStream(
      <Page>
        <StaticRouter location={{ pathname: `/` }}>
          <Homepage pets={pets} food={food}></Homepage>
        </StaticRouter>
      </Page>
    ),
    path.resolve(outputDir, "index.html")
  );
}

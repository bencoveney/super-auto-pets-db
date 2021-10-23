import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Food } from "../../database";
import { Page } from "../components/Page";
import { FoodPage } from "../components/FoodPage";
import { sanitiseName } from "../../utils";
import { StaticRouter } from "react-router-dom";
import { writeToFile } from "./writeFile";

export async function writeFoodPages(outputDir: string, food: Food[]) {
  const foodPagesDir = path.resolve(outputDir, "food");
  if (!fs.existsSync(foodPagesDir)) {
    fs.mkdirSync(foodPagesDir, { recursive: true });
  }
  await Promise.all(food.map((food) => writeFoodPage(foodPagesDir, food)));
}

async function writeFoodPage(outputDir: string, food: Food) {
  const pageName = sanitiseName(food.name);
  await writeToFile(
    ReactDOMServer.renderToStaticNodeStream(
      <Page>
        <StaticRouter location={{ pathname: `/food/${pageName}` }}>
          <FoodPage food={food}></FoodPage>
        </StaticRouter>
      </Page>
    ),
    path.resolve(outputDir, `${pageName}.html`)
  );
}

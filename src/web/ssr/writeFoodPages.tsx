import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Food } from "../../db";
import { Database, enumerateTable, getFoodUrl } from "../../db/database";
import { Page } from "../components/Page";
import { FoodPage } from "../components/FoodPage";
import { StaticRouter } from "react-router-dom";
import { writeToFile } from "./writeFile";

export async function writeFoodPages(outputDir: string, database: Database) {
  const foodPagesDir = path.resolve(outputDir, "food");
  if (!fs.existsSync(foodPagesDir)) {
    fs.mkdirSync(foodPagesDir, { recursive: true });
  }
  await Promise.all(
    enumerateTable(database.foods).map((food) =>
      writeFoodPage(foodPagesDir, food, database)
    )
  );
}

async function writeFoodPage(
  outputDir: string,
  food: Food,
  database: Database
) {
  const pathname = getFoodUrl(food);
  await writeToFile(
    ReactDOMServer.renderToStaticNodeStream(
      <Page>
        <StaticRouter location={{ pathname }}>
          <FoodPage food={food} database={database} />
        </StaticRouter>
      </Page>
    ),
    path.resolve(outputDir, `${path.posix.basename(pathname)}.html`)
  );
}

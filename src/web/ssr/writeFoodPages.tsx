import path from "path";
import fs from "fs";
import React from "react";
import { Food } from "../../db";
import { Database, enumerateTable, getFoodUrl } from "../../db/database";
import { Page } from "../components/Page";
import { FoodPage } from "../components/FoodPage";
import { StaticRouter } from "react-router-dom";
import { writePage } from "./writePage";
import { getFoodPageTitle } from "../hooks/usePageTitle";
import { hostname } from "../common";

export async function writeFoodPage(
  outputDir: string,
  food: Food,
  database: Database
) {
  const pathname = getFoodUrl(food);
  const fullPathname = getFoodUrl(food, hostname);
  await writePage(
    <Page title={getFoodPageTitle(food)} canonical={fullPathname}>
      <StaticRouter location={{ pathname }}>
        <FoodPage food={food} database={database} />
      </StaticRouter>
    </Page>,
    path.resolve(outputDir, `${path.posix.basename(pathname)}.html`)
  );
}

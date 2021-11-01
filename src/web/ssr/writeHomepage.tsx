import React from "react";
import path from "path";
import { Database } from "../../db/database";
import { Homepage } from "../components/Homepage";
import { Page } from "../components/Page";
import { StaticRouter } from "react-router-dom";
import { writePage } from "./writePage";

export async function writeHomepage(outputDir: string, database: Database) {
  await writePage(
    <Page>
      <StaticRouter location={{ pathname: `/` }}>
        <Homepage database={database} />
      </StaticRouter>
    </Page>,
    path.resolve(outputDir, "index.html")
  );
}

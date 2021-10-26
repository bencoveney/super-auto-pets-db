import ReactDOMServer from "react-dom/server";
import React from "react";
import path from "path";
import { Database } from "../../database/database";
import { Homepage } from "../components/Homepage";
import { Page } from "../components/Page";
import { StaticRouter } from "react-router-dom";
import { writeToFile } from "./writeFile";

export async function writeHomepage(outputDir: string, database: Database) {
  await writeToFile(
    ReactDOMServer.renderToStaticNodeStream(
      <Page>
        <StaticRouter location={{ pathname: `/` }}>
          <Homepage database={database} />
        </StaticRouter>
      </Page>
    ),
    path.resolve(outputDir, "index.html")
  );
}

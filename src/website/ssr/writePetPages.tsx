import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  Database,
  enumerateTable,
  getPetUrl,
  Pet,
  WithId,
} from "../../database";
import { Page } from "../components/Page";
import { PetPage } from "../components/PetPage";
import { StaticRouter } from "react-router-dom";
import { writeToFile } from "./writeFile";

export async function writePetPages(outputDir: string, database: Database) {
  const petPagesDir = path.resolve(outputDir, "pet");
  if (!fs.existsSync(petPagesDir)) {
    fs.mkdirSync(petPagesDir, { recursive: true });
  }
  await Promise.all(
    enumerateTable(database.pets).map((pet) =>
      writePetPage(petPagesDir, pet, database)
    )
  );
}

async function writePetPage(
  outputDir: string,
  pet: WithId<Pet>,
  database: Database
) {
  const pathname = getPetUrl(pet);
  await writeToFile(
    ReactDOMServer.renderToStaticNodeStream(
      <Page>
        <StaticRouter location={{ pathname }}>
          <PetPage pet={pet} database={database} />
        </StaticRouter>
      </Page>
    ),
    path.resolve(outputDir, `${path.posix.basename(pathname)}.html`)
  );
}

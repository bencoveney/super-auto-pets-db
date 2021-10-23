import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Pet } from "../../database";
import { Page } from "../components/Page";
import { PetPage } from "../components/PetPage";
import { sanitiseName } from "../../utils";
import { StaticRouter } from "react-router-dom";
import { writeToFile } from "./writeFile";

export async function writePetPages(outputDir: string, pets: Pet[]) {
  const petPagesDir = path.resolve(outputDir, "pet");
  if (!fs.existsSync(petPagesDir)) {
    fs.mkdirSync(petPagesDir, { recursive: true });
  }
  await Promise.all(pets.map((pet) => writePetPage(petPagesDir, pet)));
}

async function writePetPage(outputDir: string, pet: Pet) {
  const pageName = sanitiseName(pet.name);
  await writeToFile(
    ReactDOMServer.renderToStaticNodeStream(
      <Page>
        <StaticRouter location={{ pathname: `/pet/${pageName}` }}>
          <PetPage pet={pet}></PetPage>
        </StaticRouter>
      </Page>
    ),
    path.resolve(outputDir, `${pageName}.html`)
  );
}

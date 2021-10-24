import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Food, Pet } from "../../database";
import { Page } from "../components/Page";
import { PetPage } from "../components/PetPage";
import { sanitiseName } from "../../utils";
import { StaticRouter } from "react-router-dom";
import { writeToFile } from "./writeFile";

export async function writePetPages(
  outputDir: string,
  pets: Pet[],
  food: Food[]
) {
  const petPagesDir = path.resolve(outputDir, "pet");
  if (!fs.existsSync(petPagesDir)) {
    fs.mkdirSync(petPagesDir, { recursive: true });
  }
  await Promise.all(
    pets.map((pet) => writePetPage(petPagesDir, pet, pets, food))
  );
}

async function writePetPage(
  outputDir: string,
  pet: Pet,
  pets: Pet[],
  food: Food[]
) {
  const pageName = sanitiseName(pet.name);
  await writeToFile(
    ReactDOMServer.renderToStaticNodeStream(
      <Page>
        <StaticRouter location={{ pathname: `/pet/${pageName}` }}>
          <PetPage pet={pet} pets={pets} food={food}></PetPage>
        </StaticRouter>
      </Page>
    ),
    path.resolve(outputDir, `${pageName}.html`)
  );
}

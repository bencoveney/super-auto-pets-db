import path from "path";
import fs from "fs";
import React from "react";
import { Pet } from "../../db";
import { Database, enumerateTable, getPetUrl } from "../../db/database";
import { Page } from "../components/Page";
import { PetPage } from "../components/PetPage";
import { StaticRouter } from "react-router-dom";
import { writePage } from "./writePage";
import { getPetPageTitle } from "../hooks/usePageTitle";
import { hostname } from "../common";

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

async function writePetPage(outputDir: string, pet: Pet, database: Database) {
  const pathname = getPetUrl(pet);
  const fullPathname = getPetUrl(pet, hostname);
  await writePage(
    <Page title={getPetPageTitle(pet)} canonical={fullPathname}>
      <StaticRouter location={{ pathname }}>
        <PetPage pet={pet} database={database} />
      </StaticRouter>
    </Page>,
    path.resolve(outputDir, `${path.posix.basename(pathname)}.html`)
  );
}

import path, { resolve } from "path";
import fs from "fs";
import { writeHomepage } from "./writeHomepage";
import { getDatabase } from "../../db/content";
import { writeApi } from "./writeApi";
import { writePetPage } from "./writePetPages";
import { writeFoodPage } from "./writeFoodPages";
import { copyFiles } from "./writeRawFiles";
import { writeSitemap } from "./writeSitemap";
import { copyEmojiAssets } from "./writeEmojiAssets";
import { copyBackgroundAssets } from "./writeBackgroundAssets";
import { writeFavicons } from "./writeFavicons";
import { enumerateTable } from "../../db/database";

function mkDirP(parentDir: string, childDir: string) {
  const resolvedDir = path.resolve(parentDir, childDir);
  if (!fs.existsSync(resolvedDir)) {
    fs.mkdirSync(resolvedDir, { recursive: true });
  }
  return resolvedDir;
}

async function buildSite() {
  const outputDir = mkDirP(process.cwd(), "docs");

  const database = getDatabase();
  writeApi(outputDir, database);

  const assetsDir = mkDirP(outputDir, "assets");
  await copyBackgroundAssets(assetsDir);
  copyEmojiAssets(assetsDir, database);
  // Done after emojis to ensure svg is in place.
  await writeFavicons(database.pets["pet-fish"], assetsDir, outputDir);

  await copyFiles(outputDir);
  await writeHomepage(outputDir, database);

  const petPagesDir = mkDirP(outputDir, "pet");
  await Promise.all(
    enumerateTable(database.pets).map((pet) =>
      writePetPage(petPagesDir, pet, database)
    )
  );

  const foodPagesDir = mkDirP(outputDir, "food");
  await Promise.all(
    enumerateTable(database.foods).map((food) =>
      writeFoodPage(foodPagesDir, food, database)
    )
  );

  // Done last to ensure pages are in place.
  await writeSitemap(outputDir, database);
}

const startTime = Date.now();
buildSite().then(
  () => {
    const deltaTime = Date.now() - startTime;
    console.log(`Build succeeded in ${deltaTime}ms`);
  },
  (error) => {
    console.log(`Build failed: ${error.message || error}`);
    process.exit(1);
  }
);

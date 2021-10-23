import path from "path";
import fs from "fs";
import { writeHomepage } from "./writeHomepage";
import { copyAssets } from "./writeAssets";
import { getFood, getPets, HasImage } from "../../database";
import { writeApi } from "./writeApi";
import { writePetPages } from "./writePetPages";
import { writeFoodPages } from "./writeFoodPages";

function getOutputDir() {
  const outputDir = path.join(process.cwd(), "docs");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  return outputDir;
}

async function buildSite() {
  const outputDir = getOutputDir();
  const pets = getPets();
  const food = getFood();
  writeApi(outputDir, pets, food);
  copyAssets(outputDir, (pets as HasImage[]).concat(food));
  await writeHomepage(outputDir, pets, food);
  await writePetPages(outputDir, pets);
  await writeFoodPages(outputDir, food);
}

buildSite().then(
  () => console.log("Build succeeded"),
  (error) => {
    console.log(`Build failed: ${error.message || error}`);
    process.exit(1);
  }
);

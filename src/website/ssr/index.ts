import path from "path";
import fs from "fs";
import { writeHomepage } from "./writeHomepage";
import { copyAssets } from "./writeAssets";
import { getDatabase } from "../../database";
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
  const database = getDatabase();
  writeApi(outputDir, database);
  copyAssets(outputDir, database);
  await writeHomepage(outputDir, database);
  await writePetPages(outputDir, database);
  await writeFoodPages(outputDir, database);
}

buildSite().then(
  () => console.log("Build succeeded"),
  (error) => {
    console.log(`Build failed: ${error.message || error}`);
    process.exit(1);
  }
);

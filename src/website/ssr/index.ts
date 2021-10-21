import path from "path";
import fs from "fs";
import { writeIndex } from "./writeIndex";
import { copyAssets } from "./writeAssets";
import { getPets } from "../../database";
import { writeApi } from "./writeApi";

function getOutputDir() {
  const outputDir = path.join(process.cwd(), "docs");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  return outputDir;
}

const outputDir = getOutputDir();
const pets = getPets();
writeApi(outputDir, pets);
copyAssets(outputDir, pets);
writeIndex(outputDir, pets);

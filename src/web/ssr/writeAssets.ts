import fs from "fs";
import path from "path";
import { Database } from "../../db/database";
import { copyBackgroundAssets } from "./writeBackgroundAssets";
import { copyEmojiAssets } from "./writeEmojiAssets";

export async function copyAssets(outputDir: string, database: Database) {
  const assetsDir = getAssetsDir(outputDir);
  copyEmojiAssets(assetsDir, database);
  await copyBackgroundAssets(assetsDir);
}

function getAssetsDir(outputDir: string) {
  const assetsDir = path.resolve(outputDir, "assets");
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  return assetsDir;
}

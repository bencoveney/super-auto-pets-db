import fs from "fs";
import path from "path";
import { Pet } from "../../database";
import { copyEmojiAssets } from "./writeEmojiAssets";

export function copyAssets(outputDir: string, pets: Pet[]) {
  const assetsDir = getAssetsDir(outputDir);
  copyEmojiAssets(assetsDir, pets);
}

function getAssetsDir(outputDir: string) {
  const assetsDir = path.resolve(outputDir, "assets");
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  return assetsDir;
}

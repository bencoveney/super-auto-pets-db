import fs from "fs";
import path from "path";
import { HasImage } from "../../database";
import { copyBackgroundAssets } from "./writeBackgroundAssets";
import { copyEmojiAssets } from "./writeEmojiAssets";

export function copyAssets(outputDir: string, images: HasImage[]) {
  const assetsDir = getAssetsDir(outputDir);
  copyEmojiAssets(assetsDir, images);
  copyBackgroundAssets(assetsDir);
}

function getAssetsDir(outputDir: string) {
  const assetsDir = path.resolve(outputDir, "assets");
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  return assetsDir;
}

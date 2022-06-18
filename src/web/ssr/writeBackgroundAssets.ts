import fs from "fs";
import path from "path";
import sharp from "sharp";

const maxImageSize = 350;

export async function copyBackgroundAssets(targetDir: string) {
  const backgroundsDir = path.resolve(
    process.cwd(),
    "./src/web/assets/backgrounds"
  );
  const backgrounds = await fs.promises.readdir(backgroundsDir);
  
  await Promise.all(backgrounds.map(async (background) => {
    const sourcePath = path.resolve(backgroundsDir, background);
    const targetPath = path.resolve(targetDir, `${path.basename(background, ".png")}.webp`);
    await sharp(sourcePath)
      .resize(maxImageSize, maxImageSize)
      .toFile(targetPath);
    console.log(`Wrote ${targetPath}`);
  }));
}

import fs from "fs";
import path from "path";

export function copyBackgroundAssets(targetDir: string) {
  const backgroundsDir = path.resolve(
    process.cwd(),
    "./src/website/assets/backgrounds"
  );
  fs.readdirSync(backgroundsDir).forEach((background) => {
    const sourcePath = path.resolve(backgroundsDir, background);
    const targetPath = path.resolve(targetDir, background);
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Wrote ${targetPath}`);
  });
}

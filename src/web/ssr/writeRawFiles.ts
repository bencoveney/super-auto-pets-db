import fs from "fs";
import path from "path";

export async function copyFiles(targetDir: string) {
  const sourceDir = path.resolve(process.cwd(), "./src/web/assets/raw");
  const rawFiles = await fs.promises.readdir(sourceDir);
  await Promise.all(
    rawFiles.map(async (rawFile) => {
      const sourcePath = path.resolve(sourceDir, rawFile);
      const destPath = path.resolve(targetDir, rawFile);
      await fs.promises.copyFile(sourcePath, destPath);
      console.log(`Wrote ${destPath}`);
    })
  );
}

import fs from "fs";
import path from "path";

export async function copyRobots(targetDir: string) {
  const sourcePath = path.resolve(
    process.cwd(),
    "./src/web/assets/files/robots.txt"
  );
  const destPath = path.resolve(targetDir, "robots.txt");
  fs.promises.copyFile(sourcePath, destPath);
  console.log(`Wrote ${destPath}`);
}

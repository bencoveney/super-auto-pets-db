import * as fs from "fs";
import * as path from "path";

export function output(pets: any) {
  const outputDir = path.join(process.cwd(), "docs");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const output = path.join(outputDir, "api.json");

  fs.writeFileSync(output, JSON.stringify({ pets }, null, 2), {
    encoding: "utf-8",
  });
}

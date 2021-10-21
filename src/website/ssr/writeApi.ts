import * as fs from "fs";
import * as path from "path";

export function writeApi(outputDir: string, pets: any) {
  const output = path.join(outputDir, "api.json");

  fs.writeFileSync(output, JSON.stringify({ pets }, null, 2), {
    encoding: "utf-8",
  });

  console.log(`Wrote ${output}`);
}

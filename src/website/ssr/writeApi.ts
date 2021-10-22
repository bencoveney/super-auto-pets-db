import * as fs from "fs";
import * as path from "path";

export function writeApi(outputDir: string, pets: any, food: any) {
  const output = path.join(outputDir, "api.json");

  fs.writeFileSync(output, JSON.stringify({ pets, food }, null, 2), {
    encoding: "utf-8",
  });

  console.log(`Wrote ${output}`);
}

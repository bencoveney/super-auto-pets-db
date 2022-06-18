import * as fs from "fs";
import * as path from "path";
import { Database, serialiseDatabase } from "../../db/database";

export function writeApi(outputDir: string, database: Database) {
  const output = path.join(outputDir, "api.json");

  fs.writeFileSync(output, serialiseDatabase(database), {
    encoding: "utf-8",
  });

  console.log(`Wrote ${output}`);
}

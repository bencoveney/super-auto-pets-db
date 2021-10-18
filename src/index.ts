import * as writeApi from "./website/write_api";
import * as writeWebsite from "./website/index";
import * as database from "./database/index";
import path from "path";
import fs from "fs";

const pets = database.getPets();
const outputDir = path.join(process.cwd(), "docs");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
writeApi.output(outputDir, pets);
writeWebsite.writeWebsite(outputDir, pets);

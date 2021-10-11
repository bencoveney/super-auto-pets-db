import * as writeApi from "./website/write_api";
import * as writeWebsite from "./website/index";
import * as database from "./database/index";

const pets = database.getPets();
writeApi.output(pets);
writeWebsite.writeWebsite(pets);

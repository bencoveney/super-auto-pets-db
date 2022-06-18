import {
  SitemapStream,
  streamToPromise,
  SitemapItemLoose,
  EnumChangefreq,
} from "sitemap";
import stream from "stream";
import fs from "fs";
import path from "path";
import {
  Database,
  enumerateTable,
  getFoodUrl,
  getPetUrl,
} from "../../db/database";
import { hostname } from "../common";

export async function writeSitemap(targetDir: string, database: Database) {
  const updatedDate = new Date().toISOString();
  const links: SitemapItemLoose[] = [
    {
      url: `${hostname}/`,
      changefreq: EnumChangefreq.WEEKLY,
      lastmod: updatedDate,
    },
    ...describePetPages(database, updatedDate),
    ...describeFoodPages(database, updatedDate),
  ];

  const sitemapStream = new SitemapStream({ hostname });
  const content = await streamToPromise(
    stream.Readable.from(links).pipe(sitemapStream)
  );

  const sitemapPath = path.resolve(targetDir, "sitemap.xml");
  await fs.promises.writeFile(sitemapPath, content);

  console.log(`Wrote ${sitemapPath}`);
}

function describePetPages(
  database: Database,
  updatedDate: string
): SitemapItemLoose[] {
  return enumerateTable(database.pets).map((pet) => {
    return {
      url: `${hostname}${getPetUrl(pet)}`,
      changefreq: EnumChangefreq.WEEKLY,
      lastmod: updatedDate,
      img: [
        {
          url: `${hostname}/assets/${pet.id}.svg`,
          // caption: "Another image",
          // title: "The Title of Image Two",
          // geoLocation: "London, United Kingdom",
          // license: "https://creativecommons.org/licenses/by/4.0/",
        },
      ],
    };
  });
}

function describeFoodPages(
  database: Database,
  updatedDate: string
): SitemapItemLoose[] {
  return enumerateTable(database.foods).map((food) => {
    return {
      url: `${hostname}${getFoodUrl(food)}`,
      changefreq: EnumChangefreq.WEEKLY,
      lastmod: updatedDate,
      img: [
        {
          url: `${hostname}/assets/${food.id}.svg`,
          // caption: "Another image",
          // title: "The Title of Image Two",
          // geoLocation: "London, United Kingdom",
          // license: "https://creativecommons.org/licenses/by/4.0/",
        },
      ],
    };
  });
}

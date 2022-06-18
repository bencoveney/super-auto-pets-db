import { copyFile, writeFile } from "fs/promises";
import path from "path";
import sharp from "sharp";
import { Pet } from "../../db";
import toIco from "to-ico";

const formats: { kind: "png" | "ico"; size: number }[] = [
  { kind: "ico", size: 32 },
  { kind: "png", size: 180 },
  { kind: "png", size: 192 },
  { kind: "png", size: 512 },
];

export async function writeFavicons(
  pet: Pet,
  sourceSvgDir: string,
  destPath: string
) {
  const sourceSvg = path.resolve(sourceSvgDir, `${pet.id}.svg`);
  const destSvg = path.resolve(destPath, "favicon.svg");
  copyFile(sourceSvg, destSvg);
  console.log(`Wrote ${destSvg}`);
  await Promise.all(
    formats.map(async ({ kind, size }) => {
      const destFile = path.resolve(destPath, `favicon-${size}.${kind}`);
      const resized = sharp(sourceSvg).resize(size, size);
      switch (kind) {
        case "png":
          await resized.toFile(destFile);
          break;
        case "ico":
          await writeFile(destFile, await toIco(await resized.toBuffer()));
          break;
      }
      console.log(`Wrote ${destFile}`);
    })
  );
}

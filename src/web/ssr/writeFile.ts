import fs from "fs";

export async function writeToFile(
  content: NodeJS.ReadableStream,
  filePath: string
) {
  return new Promise<void>((resolve, reject) => {
    const writeStream = fs.createWriteStream(filePath);
    content.pipe(writeStream);
    writeStream.on("finish", () => {
      console.log(`Wrote ${filePath}`);
      resolve();
    });
    writeStream.on("error", () => {
      reject(new Error(`Could not write ${filePath}`));
    });
  });
}

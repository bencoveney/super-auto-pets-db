import emojiUnicode from "emoji-unicode";
import fs from "fs";
import path from "path";
import childProcess from "child_process";
import {
  EmojiImage,
  FxEmojiImage,
  HasImage,
  Identifiers,
  NotoEmojiImage,
  TwEmojiImage,
} from "../../db";
import { Database, enumerateTable } from "../../db/database";

export function copyEmojiAssets(targetDir: string, database: Database) {
  const existingAssets = getExistingEmojis(targetDir);
  const images = new Array<HasImage & Identifiers>()
    .concat(
      enumerateTable(database.pets),
      enumerateTable(database.foods),
      enumerateTable(database.statuses)
    )
    .filter((image) => !existingAssets.includes(image.id));
  images.forEach(({ id, image }) => {
    const assetPath = path.resolve(targetDir, `${id}.svg`);
    const content = sanitiseSvg(gitShowEmoji(image));
    fs.writeFileSync(assetPath, content);
    console.log(`Wrote ${assetPath}`);
  });
}

function getExistingEmojis(targetDir: string) {
  const regExp = /((?:pet|status|food)-\w+).svg/;
  return fs
    .readdirSync(targetDir)
    .map((filename) => filename.match(regExp))
    .filter((match) => match && match.length > 0)
    .map((match) => (match as RegExpMatchArray)[1]);
}

function getEmojiPath(emoji: EmojiImage) {
  switch (emoji.source) {
    case "fxemoji":
      return getFxEmojiPath(emoji);
    case "noto-emoji":
      return getNotoEmojiPath(emoji);
    case "twemoji":
      return getTwEmojiPath(emoji);
    default:
      throw new Error("Unknown emoji source");
  }
}

function getFxEmojiPath(emoji: FxEmojiImage): string {
  let unicodeValues: string[] = emojiUnicode(emoji.unicodeCodePoint).split(" ");
  return path.resolve(
    __dirname,
    "../../emoji/fxemoji/svgs/FirefoxEmoji/",
    `u${unicodeValues.join("_").toUpperCase()}-${emoji.name}.svg`
  );
}

function getNotoEmojiPath(emoji: NotoEmojiImage): string {
  let unicodeValues: string[] = emojiUnicode(emoji.unicodeCodePoint).split(" ");
  return path.resolve(
    __dirname,
    "../../emoji/noto-emoji/svg/",
    `emoji_u${unicodeValues.join("_")}.svg`
  );
}

function getTwEmojiPath(emoji: TwEmojiImage): string {
  let unicodeValues: string[] = emojiUnicode(emoji.unicodeCodePoint).split(" ");
  return path.resolve(
    __dirname,
    "../../emoji/twemoji/assets/svg/",
    `${unicodeValues.join("_")}.svg`
  );
}

function gitShowEmoji(image: EmojiImage) {
  const emojiPath = getEmojiPath(image);
  const emojiDir = path.dirname(emojiPath);
  const emojiFileName = path.basename(emojiPath);
  try {
    return childProcess
      .execSync(`git show ${image.commit}:./${emojiFileName}`, {
        cwd: emojiDir,
        windowsHide: true,
      })
      .toString();
  } catch (e) {
    console.warn(
      "Do you need to get submodules?: git submodule update --init --recursive"
    );
    throw e;
  }
}

function sanitiseSvg(svgContent: string) {
  // For some reason old noto-emojis have jank width and height.
  return svgContent.replace(
    'width="128" height="128"',
    'x="0px" y="0px" viewBox="0 0 128 128"'
  );
}

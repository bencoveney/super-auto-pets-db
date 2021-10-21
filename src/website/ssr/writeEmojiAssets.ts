import fs from "fs";
import emojiUnicode from "emoji-unicode";
import path from "path";
import {
  EmojiImage,
  FxEmojiImage,
  NotoEmojiImage,
  Pet,
  TwEmojiImage,
} from "../../database";

export function copyEmojiAssets(targetDir: string, pets: Pet[]) {
  pets.forEach((pet) => {
    const assetPath = path.resolve(
      targetDir,
      `${pet.name.toLowerCase().replace(/\s/g, "_")}.svg`
    );

    fs.copyFileSync(getEmojiPath(pet.image), assetPath);

    console.log(`Wrote ${assetPath}`);
  });
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
    `u${unicodeValues.join("_")}-${emoji.name}.svg`
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

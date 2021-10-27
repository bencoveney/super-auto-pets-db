import emojiUnicode from "emoji-unicode";
import React from "react";
import { EmojiImage, HasImage, Stat, Tier } from "../../db";

export function EmojiSource(props: { image: EmojiImage }): React.ReactElement {
  return (
    <div>
      <a
        href={getGithubUrl(props.image)}
        className="text-blue-300 hover:text-blue-100 visited:text-purple-300 underline"
      >
        {getEmojiPackName(props.image)}
      </a>
    </div>
  );
}

function getEmojiPackName(image: EmojiImage) {
  switch (image.source) {
    case "noto-emoji":
      return "Google's Noto Emoji";
    case "twemoji":
      return "Twitter's Twemoji";
    case "fxemoji":
      return "Mozilla's FxEmojis";
  }
}

function getGithubUrl(image: EmojiImage) {
  let unicodeValues: string[] = emojiUnicode(image.unicodeCodePoint).split(" ");
  switch (image.source) {
    case "noto-emoji":
      return `https://github.com/googlefonts/noto-emoji/blob/${
        image.commit
      }/svg/emoji_u${unicodeValues.join("_")}.svg`;
    case "twemoji":
      return `https://github.com/twitter/twemoji/blob/${
        image.commit
      }/assets/svg/${unicodeValues.join("_")}.svg`;
    case "fxemoji":
      return `https://github.com/mozilla/fxemoji/blob/${
        image.commit
      }/svgs/FirefoxEmoji/u${unicodeValues.join("_").toUpperCase()}-${
        image.name
      }.svg`;
  }
}

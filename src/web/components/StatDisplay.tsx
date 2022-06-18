import React from "react";
import { Stat, Tier } from "../../db";

export function StatDisplay(props: {
  stat: Stat | Tier;
  emoji: string;
}): React.ReactElement {
  if (typeof props.stat == "string") {
    return <div>{props.stat}</div>;
  }
  return (
    <div>
      {props.stat} {props.emoji.repeat(props.stat)}
    </div>
  );
}

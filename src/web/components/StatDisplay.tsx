import React from "react";
import { Stat } from "../../db";

export function StatDisplay(props: {
  stat: Stat;
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

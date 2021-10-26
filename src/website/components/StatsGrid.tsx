import React, { ReactElement } from "react";

export function StatsGrid(props: React.PropsWithChildren<{}>) {
  return (
    <div className="text-xl flex-grow grid grid-cols-keyvalue gap-2 max-w-4xl items-baseline">
      {props.children}
    </div>
  );
}

export function StatsSummary(props: React.PropsWithChildren<{}>) {
  return (
    <div className="col-span-2 mt-4 border-b border-gray-500 text-2xl font-light">
      {props.children}
    </div>
  );
}

export function StatsRow(
  props: React.PropsWithChildren<{ text: string; className?: string }>
) {
  if (!props.children) {
    //|| props.children.type() === null) {
    return null;
  }
  return (
    <>
      <div className={"font-bold text-base text-gray-300"}>{props.text}:</div>
      <div className={props.className}>{props.children}</div>
    </>
  );
}

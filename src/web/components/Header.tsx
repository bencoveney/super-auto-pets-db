import React from "react";

export function Header(props: React.PropsWithChildren<{}>) {
  return (
    <div className="p-3 flex flex-col lg:flex-row justify-between items-center">
      {props.children}
    </div>
  );
}

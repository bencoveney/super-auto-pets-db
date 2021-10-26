import React from "react";
import { Database, StatusRef } from "../../db/database";

export function StatusDescription(props: {
  status?: StatusRef;
  database: Database;
}) {
  if (!props.status) {
    return null;
  }
  const status = props.database.statuses[props.status];
  return (
    <div className="italic">
      {status.name}: {status.ability.description}
    </div>
  );
}

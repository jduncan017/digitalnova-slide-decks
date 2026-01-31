import type { ReactElement } from "react";
import type { SOWDefinition } from "./sowSchema";
import { SOWDocument } from "~/components/SOWDocument";

/**
 * Renders a SOW document from a definition
 */
export function renderSOW(sow: SOWDefinition): ReactElement {
  return <SOWDocument content={sow} />;
}

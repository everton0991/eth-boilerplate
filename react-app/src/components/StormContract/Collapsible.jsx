import { useState } from "react";
import "./Collapsible.css";

import CollapsiblePanel from "./CollapsiblePanel";
import CollapsibleBody from "./CollapsibleBody";

export default function Collapsible({ open = false, active = false, item = [] }) {
  const [isOpen, toggleCollapsible] = useState(open);

  return (
    <div className={`collapsible-wrapper ${isOpen ? "open" : ""}`}>
      <CollapsiblePanel
        isOpen={isOpen}
        active={active}
        header={item.header}
        onClick={() => toggleCollapsible(isOpen => !isOpen)}
      >
        <CollapsibleBody isOpen={isOpen} active={active} content={item.contract} />
      </CollapsiblePanel>
    </div>
  );
}

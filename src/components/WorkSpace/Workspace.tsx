import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ToolType } from "../../types/Tool";

import Image from "../Image/Image";
import Text from "../Text/Text";

import "./Workspace.css";

const Workspace = () => {
  const [tools, setTools] = useState<number[]>([]);

  const [, drop] = useDrop(() => ({
    accept: ["Image", "Text"],
    drop: (item: ToolType) => addToolToBoard(item.id),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  const addToolToBoard = (id: number) => {
    tools.push(id);
  };

  return (
    <div className="workspace" ref={drop}>
      <h2 className="title">Your workspace</h2>
      {tools.map((tool) => (tool == 1 ? <Text /> : <Image />))}
    </div>
  );
};

export default Workspace;

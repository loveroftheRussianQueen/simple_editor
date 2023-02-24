import React from "react";
import { useDrag } from "react-dnd";
import { ToolType } from "../../types/Tool";

import { MdOutlineImage } from "react-icons/md";

const Tool = ({ id, name, className }: ToolType) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: name,
    item: { id: id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return (
    <div className={className} ref={drag}>
      {name == "Image" ? <MdOutlineImage className="icon" /> : name}
    </div>
  );
};

export default Tool;

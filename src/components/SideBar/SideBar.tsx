import React from "react";

import Tool from "../Tool/Tool";

import "./SideBar.css";

const tools = [
  {
    id: 1,
    name: "Text",
    className: "text",
  },
  {
    id: 2,
    name: "Image",
    className: "image_label",
  },
];

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2 className="title">Choose your tool</h2>
      <>
        {tools.map((tool) => (
          <Tool
            className={tool.className}
            name={tool.name}
            id={tool.id}
            key={tool.id}
          />
        ))}
      </>
    </div>
  );
};

export default SideBar;

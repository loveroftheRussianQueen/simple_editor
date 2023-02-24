import React from "react";
import "./Text.css";

const Text = () => {
  return (
    <div className="container">
      <textarea name="postContent" rows={4} cols={40} className="textArea" />
    </div>
  );
};

export default Text;

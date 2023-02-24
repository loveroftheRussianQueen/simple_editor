import React, { ChangeEvent, useState } from "react";
import "./Image.css";

const Image = () => {
  const [url, setUrl] = useState<string>("https://i.imgur.com/MrGY5EL.jpeg");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="wrapper">
      <img src={url} alt="Uploaded image" className="image" />
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default Image;

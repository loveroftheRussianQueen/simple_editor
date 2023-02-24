import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import SideBar from "./components/SideBar/SideBar";
import Workspace from "./components/WorkSpace/Workspace";

import "./App.css";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <SideBar />
        <Workspace />
      </DndProvider>
    </div>
  );
}

export default App;

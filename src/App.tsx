import React from "react";
import "./App.css";
import { FluentSearch } from "./FluentSearch";

function App() {
  return (
    <div className="App">
      <FluentSearch
        onSearch={function (search: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}

export default App;

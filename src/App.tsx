import React, { useEffect, useState } from "react";
import "./App.css";
import { MetadataProvider } from "./context";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <MetadataProvider>
      <Dashboard />
    </MetadataProvider>
  );
}

export default App;

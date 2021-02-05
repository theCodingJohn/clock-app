import React from "react";

import {StatusProvider} from "./contexts/StatusContext"

// pages
import { Home } from "./pages/index"

// style
import "./App.css"

const App = () => {
  return (
    <StatusProvider>
      <Home/>
    </StatusProvider>
  )
};

export default App;

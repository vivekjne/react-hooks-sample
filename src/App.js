import React from "react";
import AppearanceProvider from "./providers/AppearanceProvider";

import Home from "./screens/Home";

const App = () => {
  return (
    <>
      <AppearanceProvider>
        <Home />
      </AppearanceProvider>
    </>
  );
};

export default App;

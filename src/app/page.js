import React from "react";
import Home from "./Home/Home";

export default function App() {
  return (
    <React.Suspense>
        <Home />
    </React.Suspense>
  );
}

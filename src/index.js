import React from "react";
// import ReactDOM from 'react-dom'  ❌ (Not needed for React 18)

// ✅ React 18 syntax
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from "./App";


// ✅ Correct usage of `createRoot`
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

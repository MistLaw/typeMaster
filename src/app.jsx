
import React, { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root.jsx"
import MainMenu from "./components/MainMenu.jsx";
import Practice from "./routes/Practice.jsx";
import Tutorial from "./routes/Tutorial.jsx";
import KeyBoard from "./components/KeyBoard.jsx";

/*
function render() {
  ReactDOM.render(<KeyBoard/>, document.body);
}

render();
*/

const router = createBrowserRouter([
  {
    path: "/main_window",
    element: <Root/>
  },
  {
    path: "/practice",
    element: <Practice/>
  },
  {
    path: "/tutorial",
    element: <Tutorial/>
  },
])

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
);
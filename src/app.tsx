import React, { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "src/redux/store";

import "./index.css";
import Home from "./scenes/Home";
import Practice from "./scenes/practice";
import Tutorial from "src/scenes/tutorial";
import CharacterPractice from "src/scenes/practice/characterPractice";
import SentencePractice from "src/scenes/practice/sentencePractice";
import Error from "./scenes/Error";

/*
function render() {
  ReactDOM.render(<KeyBoard/>, document.body);
}

render();
*/

const router = createMemoryRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/practice",
      element: <Practice />,
      errorElement: <Error />,
      children: [
        { path: "/practice/character", element: <CharacterPractice /> },
        { path: "/practice/sentence", element: <SentencePractice/> },

      ],
    },
    {
      path: "/tutorial",
      element: <Tutorial />,
      errorElement: <Error />,
    },
  ],
  {
    initialEntries: ["/", "/practice","/practice/sentence"],
    initialIndex: 2,
  }
);

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);

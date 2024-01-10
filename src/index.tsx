import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import AlbumAddNew from "./components/AlbumAddNew";
import { albumLabelList } from "./modules";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "add-album", // This will be the URL path to access AlbumAddNew
        element: <AlbumAddNew labels={albumLabelList} onAddNewAlbum={() => ""} />,
      },
    ]
  },
]);

//In React 18, ReactDOM.render method is still available,
//but ReactDOM.createRoot is now the recommended approach
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//Previously, this might look like this: ReactDOM.render(
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

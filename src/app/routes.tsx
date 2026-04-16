import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Music } from "./pages/Music";
import { Gaming } from "./pages/Gaming";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "music", Component: Music },
      { path: "gaming", Component: Gaming },
    ],
  },
]);

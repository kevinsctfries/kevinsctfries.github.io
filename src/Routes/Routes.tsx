import { createHashRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import ContactPage from "../pages/ContactPage/ContactPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

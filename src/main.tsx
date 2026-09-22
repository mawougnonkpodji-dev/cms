import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-600.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./app/App.tsx";
import { RouteError } from "./app/components/shared/RouteError.tsx";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    errorElement: (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <RouteError />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);

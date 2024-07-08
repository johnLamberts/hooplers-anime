import Homepage from "@/module/animes/home-page/home.page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    lazy: async () => {
      const AppShell = await import("@/layouts/app-page.layout");
      return { Component: AppShell.default };
    },
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/home",
        Component: Homepage,
      },
    ],
  },
]);

export default router;

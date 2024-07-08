import router from "@/routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col relative min-h-screen">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
};
export default Providers;

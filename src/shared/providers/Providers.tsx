import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Providers = () => {
  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
};
export default Providers;

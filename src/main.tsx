import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";

import { App } from "src/App";

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

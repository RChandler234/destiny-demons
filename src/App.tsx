import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppRoutes } from "./AppRoutes";
import { CssBaseline } from "@mui/material";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <CssBaseline />
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;

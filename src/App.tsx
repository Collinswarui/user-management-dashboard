import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastProvider } from "./components/ToastProvider";

const queryClient = new QueryClient();

 function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
        <AppRoutes />
        </main>

        <Footer />
        </div>
      </Router>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;

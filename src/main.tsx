import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/authcontext/index.tsx";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router.tsx";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SnackbarProvider maxSnack={3}>
          <App />
          <Router />
        </SnackbarProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

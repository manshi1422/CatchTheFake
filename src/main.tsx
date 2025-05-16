import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UserProvider } from "./context/authcontext/index.tsx";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router.tsx";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SnackbarProvider maxSnack={3}>
          <App />
          <Router />
        </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);

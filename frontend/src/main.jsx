import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>

        <App />

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "12px",
              background: "#ffffff",
              color: "#1e293b",
              boxShadow: "0 10px 30px rgba(0,0,0,.12)"
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#ffffff"
              }
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#ffffff"
              }
            }
          }}
        />

      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
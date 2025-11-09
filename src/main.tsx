import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="114573367452-g6dada3hi5qkjbmu3mcepcipg4pigohc.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

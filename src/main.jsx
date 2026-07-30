import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import App from "./App.jsx";

AOS.init({
  duration: 800, // animatsiya davomiyligi (ms)
  once: true, // faqat bir marta ishlasin (true) yoki scroll qilganda har safar (false)
  offset: 100, // elementga qancha qolganda animatsiya boshlansin
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import JpegImages from "../components/JpegImages.tsx";
import WebpImages from "../components/WebpImages.tsx";
import PngImages from "../components/PngImages.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/jpeg" element={<JpegImages />} />
      <Route path="/webp" element={<WebpImages />} />
      <Route path="/png" element={<PngImages />} />
    </Routes>
  </BrowserRouter>
);

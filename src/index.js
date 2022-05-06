import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Footer from "./componentes/Footer";

import Header from "./componentes/Header";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <App />
    <Footer titleFooter="IFSULDEMINAS 2020 @Michel Corrêa Martins" />
  </StrictMode>
);

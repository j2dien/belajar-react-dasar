import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactFormImmer from "./ConctactFormImmer";



createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ContactFormImmer />
    </StrictMode>
);
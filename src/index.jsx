import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as AuthProvider} from "./Components/Context/Parol";
import { Provider as ThemeProvider } from "./Components/Context/Theme";
import { Provider as Loacalization } from "./Components/Context/Localization";
import App from "./App";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Loacalization>
           <App />
           </Loacalization>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

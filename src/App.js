import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Register from "./components/Register";
import Checkout from "./components/Checkout"
import Thanks from "./components/Thanks"
import theme from "./theme"
import { ThemeProvider } from "@mui/system";
import React from "react";

export const config = {
  endpoint: `https://qkart-frontend-dv73.onrender.com/api/v1`,
};
   //https://localhost:5500
function App() {
  return (
    <div className="App">
      <React.StrictMode>
       <ThemeProvider theme={theme}>
          <Switch>
             <Route path="/register" component={Register} />
             <Route path="/login" component={Login} />
             <Route exact path="/" component={Products} />
             <Route path="/checkout" component={Checkout} />
             <Route path="/thanks" component={Thanks} />
        </Switch>
      </ThemeProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Character } from "../Pages/Character";
import { Home } from "../Pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <h1>Login</h1>
      </Route>
      <Route exact path="/register">
        <h1>Register</h1>
      </Route>
      <Route path="/character/:id">
        <Character />
      </Route>
      <Route path="*">
        {/* É uma boa prática sempre renderizar Pages nas rotas
        Exemplo do que não fazer abaixo: */}
        <h1>404 - Page Not Found</h1>
        <img src="https://http.cat/404" alt="Page not found" />
      </Route>
    </Switch>
  );
};

import { Switch, Route } from "react-router-dom";
import { APP_ROUTES } from "./configs/routes";
import Home from "./views/Home";
import Header from "./components/Header";
import Image1 from "./views/ImageView";

/**
 * App Routes Component
 */
function AppRoutes() {
  return (
    <div>
      <Header />
      <Switch>
        {/* Home */}
        <Route exact path={APP_ROUTES.HOME} component={Home} />

        {/* Image */}
        <Route exact path={APP_ROUTES.IMAGE} component={Image1} />

        {/* Default */}
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default AppRoutes;

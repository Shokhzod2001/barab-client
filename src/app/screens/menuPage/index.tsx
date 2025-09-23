import { Switch, Route } from "react-router-dom";
import "../../../css/menu.css";
import RestaurantMenu from "./Menu";
import ChosenProduct from "./ChosenProduct";
import { CartItem } from "../../../lib/types/search";

interface MenuPageProps {
  onAdd: (item: CartItem) => void;
}

export default function MenuPage(props: MenuPageProps) {
  const { onAdd } = props;
  return (
    <div className="products-page">
      <Switch>
        <Route path="/menu/:productId">
          <ChosenProduct onAdd={onAdd} />
        </Route>
        <Route exact path="/menu">
          <RestaurantMenu onAdd={onAdd} />
        </Route>
      </Switch>
    </div>
  );
}

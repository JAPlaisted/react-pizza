import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../Pages/FullMenu.css";
import pizza from "../assets/pizza-2.png";
import phone from "../assets/phone-small.svg";

function FullMenu() {
  return (
    <div className="full-menu">
      <div class="header">
        <Link to="/"> 🡠 Back</Link>
        <a href="https://magnificent-torte-aec714.netlify.app" class="phone">
          <img class="icon" src={phone} alt="Phone Icon" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <HashLink to="#hiddenMenu1"> Pizza</HashLink>
          </li>
          <li>
            <HashLink to="#hiddenMenu2"> Sandwhiches</HashLink>
          </li>
          <li>
            <HashLink to="#hiddenMenu3"> Salad</HashLink>
          </li>
          <li>
            <HashLink to="#hiddenMenu4"> Appetizers</HashLink>
          </li>
          <li>
            <HashLink to="#hiddenMenu5"> Beverages</HashLink>
          </li>
          <li>
            <HashLink to="#hiddenMenu6"> Specials</HashLink>
          </li>
        </ul>
      </nav>
      <div class="menu-container">
        <img class="menu-pizza" src={pizza} alt="A pizza" />
        <div id="hiddenMenu1">
          <h2>PIZZA</h2>
          <b>Build Your Own MasterPizza!</b> <br />
          SMALL, MEDIUM, LARGE, X-LARGE, BIG KAHUNA <br />( Double Toppings,
          Chicken and Red Peppers, Extra Cheese, Extra Charge) <br />
          <br />
          <b>TOPPINGS</b>
          <br />
          Pepperoni, Mozzarella Cheese, Canadian Bacon, Genoa Salami, Fresh
          Mushrooms, Red Onion, <br />
          Green Bell Pepper, Black Olives, Pineapple, Roma Tomato, Zucchini,
          Jalapeños, <br />
          Marinated Artichoke Hearts, Garlic, Ground Beef, Bacon Pieces,
          Linguica,
          <br />
          Italian Sausage, Chorizo, Green Onion, Grilled Chicken Breast
          <br />
          <br />
          <br />
          <b>Specialty Pizzas</b> <br />
          SMALL, MEDIUM, LARGE, X-LARGE, BIG KAHUNA <br />
          <br />
          <b>BULLDOG SPECIAL</b>
          <br />
          Pepperoni, Canadian Bacon, Fresh Mushrooms, Red Onions, Green Bell
          Peppers,
          <br />
          Black Olives, Italian Sausage, Ground Beef, Genoa Salami <br />
          <br />
          <b>HEART ATTACK SPECIAL</b> <br />
          Pepperoni, Salami, Canadian Bacon, Linguica, Bacon Pieces, Italian
          Sausage, Ground Beef <br />
          <br />
          <b>TRADITIONAL VEGETARIAN</b> <br />
          Fresh Mushrooms, Red Onions, Green Bell Peppers, Black Olives, Green
          Onions, Roma Tomatoes <br />
          <br />
          <b>GOOD OLD HAWAIIAN</b> <br />
          Canadian Bacon, Pineapple <br />
          <br />
          <b>CLASSIC COMBINATION</b> <br />
          Pepperoni, Fresh Mushrooms, Italian Sausage, Black Olives <br />
          <br />
          <b>LA MEXICANA</b> <br />
          Chorizo, Roma Tomatoes, Red Onions, Jalapeños
          <br />
          <br />
          <br />
          <b>Gourmet Pizzas</b>
          <br />
          SMALL, MEDIUM, LARGE, X-LARGE, BIG KAHUNA <br />
          <br />
          <br />
          <b>SANTA FE CHICKEN</b> <br />
          Grilled Chicken, Green Bell Peppers, Green Onions, Roma Tomatoes on
          Creamy Garlic Sauce <br />
          <br />
          <b>FUNKY CHUNKY CHICKEN</b> <br />
          Grilled Chicken, Canadian Bacon, Red Onions, Bacon Pieces on Creamy
          Garlic Sauce <br />
          <br />
          <b>RANCH CHICKEN BACON</b> <br />
          Grilled Chicken, Black Olives, Bacon Pieces on Creamy Garlic Sauce
          <br />
          <br />
          <b>BAR-B-Q CHICKEN</b> <br />
          Grilled Chicken, Bacon Pieces, Green Onions, Red Onions on BBQ Sauce
          <br />
          <br />
          <b>PESTO CHICKEN</b> <br />
          Roasted Red Bell Peppers, Red Onions, Bacon, Marinated Artichokes,
          Grilled Chicken on Basil Pesto Sauce <br />
          <br />
          <b>GOURMET VEGGIE CHICKEN</b> <br />
          Fresh Mushrooms, Red Onions, Green Bell Peppers, Black Olives, Green
          Onions, Roma Tomatoes, <br />
          Marinated Artichokes, Zucchini, Grilled Chicken Breast on Creamy
          Garlic Sauce <br />
          <br />
          <b>THE MEATBALL</b> <br />
          Meatballs, Green Bell Peppers, Red Onions, Black Olives <br />
          <br />
          <b>PACIFICA'S TATER PIZZA</b> <br />
          Potato Wedges, Red Onions, Bacon Pieces, Green Onions, Jalapenos on
          Creamy Garlic Sauce
        </div>
      </div>
      <div id="hiddenMenu2">
        <h2>SANDWHICHES</h2>
        <b>CLASSIC ITALIAN SUB</b> <br />
        Marinara Sauce, Salami, Pepperoni, Canadian Bacon, Black Olives, Red
        Onions, Mozzarella Cheese
        <br />
        <br />
        <b>MEATBALL SUB</b> <br />
        All Beef Meatball, Marinara Sauce, Red Onions, Olives, Green Bell
        Peppers, Mozzarella Cheese <br />
        <br />
        <b>FUNKY CHUNKY CHICKEN SUB</b> <br />
        Homemade Ranch Sauce, Canadian Bacon, Grilled Chicken Breast, Red
        Onions, Mozzarella Cheese, Bacon Pieces <br />
        <br />
        <b>OVEN ROASTED TURKEY SUB</b>
        <br />
        Turkey Breast, Lettuce, Roma Tomatoes, Wax Pepper Rings, Mozzarella
        Cheese, Mayonnaise, Mustard, Italian Herb Sauce
        <br />
        <br />
        <b>TURKEY CLUB</b> <br />
        Turkey Breast, Canadian Bacon, Lettuce, Roma Tomatoes, Wax Pepper Rings,
        Mozzarella Cheese, Mayonnaise, Mustard, Italian Herb Sauce <br />
        <br />
        <b>PESTO CHICKEN SUB</b>
        <br />
        Grilled Chicken Breast, Pesto Sauce, Mozzarella Cheese, Marinated
        Artichoke Hearts, Roasted Red Bell Pepper
        <br />
        <br />
        <b>RANCH CHICKEN & BACON SUB</b>
        <br />
        Grilled Chicken, Bacon Pieces, Fresh Mushrooms, Mozzarella Cheese
        <br />
        <br />
        <b>HAM & CHEESE</b> <br />
        Canadian Bacon, Mozzarella Cheese, Mayonnaise, Mustard, Lettuce, Roma
        Tomatoes, Italian Herb Sauce, Wax Pepper Rings
        <br />
        <br />
        <b>VEGGIE SUB</b>
        <br />
        Lettuce, Roma Tomatoes, Red Onions, Fresh Mushrooms, Marinated Artichoke
        Hearts, Roasted Red Peppers, Mozzarella Cheese, Italian Herb Sauce
      </div>
      <div id="hiddenMenu3">
        <h2>SALAD</h2>
        <b>GARDEN SALAD</b>
        <br />
        Lettuce, Fresh Mushrooms, Red Onions, Black Olives, and Roma Tomatoes,
        Homemade Ranch, Italian, or Blue Cheese Dressing <br />
        <br />
        <b>PACIFICA SALAD </b>
        <br />
        Lettuce,Canadian Bacon, Genoa Salami, Roma Tomatoes, Red Onions, Fresh
        Mushrooms, Black Olives, <br />
        Mozzarella Cheese, Bacon Pieces, Homemade Ranch, Italian or Blue Cheese
        Dressing <br />
        <br />
        <b>PESTO CHICKEN SALAD</b> <br />
        Lettuce, Marinated Artichoke Hearts, Red Onions, Roasted Red Peppers,
        Grilled Chicken,
        <br />
        Mozzarella Cheese, Bacon Pieces, Basil Pesto Sauce
      </div>
      <div id="hiddenMenu4">
        <h2>Appetizers</h2>
        <b>WINGS</b>
        <br />
        Buffalo, BBQ, Mango Habanero, Sweet Red Chili, Garlic Parmesan, or
        Teriyaki <br />
        8pc & 16pc
        <br />
        <br />
        BBQ PORK SPARE RIBS <br />
        <br />
        CHEESY GARLIC BREAD STICKS
        <br />
        <br />
        SEASONED POTATO WEDGES
        <br />
        <br />
        TOASTED GREEN BEAN FRIES
        <br />
        <br />
        CHEESY JALAPENO POTATO BITES
        <br />
        <br />
        4 oz CUP OF RANCH, MARINARA, OR JALAPEÑOS
        <br />
        <br />
        <b>Desserts</b>
        <br />
        RASPBERRY CHEESECAKE BITES
        <br />
        GIANT CHOCOLATE CHIP COOKIE
      </div>
      <div id="hiddenMenu5">
        <h2>Beverages</h2>
        <b>2 LITER SODAS</b> <br />
        Pepsi, Diet Pepsi, Wild Cherry Pepsi, Dr. Pepper, Sierra Mist, Mountain
        Dew, Orange Crush
      </div>
      <div id="hiddenMenu6">
        <h2>Specials</h2>
        <b>Pacifica Special</b>
        <br />
        1 Large 3 Topping Pizza*, Cheesy Bread or Pacifica Salad, and a 2-Liter
        Soda <br />
        $25.99 <br />
        <br />
        <b>Spud Special</b>
        <br />
        1 Large Unlimited Topping Pizza*, 1lb Seasoned Potato Wedges, and a
        2-Liter Soda
        <br />
        $23.99 <br />
        <br />
        <b>Family Meal Deal</b> <br />1 X-Large 2 Topping Pizza*, Cheesy Garlic
        Bread Sticks, and a 2-Liter Soda
        <br />
        $27.99 <br />
        <br />
        *Excludes Chicken and Roasted Red Bell Peppers
      </div>
    </div>
  );
}

export default FullMenu;

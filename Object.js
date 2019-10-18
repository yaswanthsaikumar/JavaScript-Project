var car =
{
    color:"red",
    size:"16",
    brand: "audi",
    wheels:"4",
    model: "A8"
}
console.log(car);
//dot notation
var pizza = {};
//Object.property = value;
pizza.crust = "Wheat";
pizza.sauce = "marinara";
pizza.cheess = "Mozrilla";
pizza.toppings = "tomato,onions";
console.log(pizza);
var cup = {};
cup['color']="red",
cup['size']="medium";
cup['liquid']="water";
cup['metal']="glass";
console.log(cup);
console.log(cup.color);
cup.color="green";
console.log(cup.color);
//error:pizza.how many=5;
pizza["how many"]=10;
console.log(pizza['how many']);
//Note:we cant give a name to the property like make year,my age or u&me using dot notation but we can do that using bracket notation.



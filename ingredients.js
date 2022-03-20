const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0; // where to start 
while ( i < ingredients.length) { // when to stop 
  console.log(ingredients[i]);
  i++; // how to get to next item
}


// Write a for loop that prints out the contents of ingredients:

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length -1; i >= 0; i--) {
  console.log(ingredients[i]);
}


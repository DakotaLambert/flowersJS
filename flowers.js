const flowers = [
  {
    id: 1,
    color: "White",
    species: "Rose",
    price: 0.9,
  },
  {
    id: 2,
    color: "red",
    species: "tulip",
    price: 1.1,
  },
];



// declared a variable of addFlower, that is equal to a function, with one parameter, which i have set the value of to flowerObject
const addFlower = (flowerObject) => {
 
// accessing the flowers arrays length, and subtracting one to get the last INDEX value of my objects in the array(the red tulip object) now equal to variable lastIndex
  const lastIndex = flowers.length - 1; 

//flower[lastIndex] is flowers[1] because the lastIndex is equal to index place 1, which being set to a NEW variable called currentLastFlower
  const currentLastFlower = flowers[lastIndex];

//now currentLastFlower.id is equal to the OBJECT in index place 1 in my array, and is accessing the id key/valuePair in that object, and setting it to a new variable of maxId
  const maxId = currentLastFlower.id;

//maxId has added id: 2 of my last object, + 1 to now equal 3. and is GIVING that new Id value to the object stored in the flowerObject parameter, which is the "orange tulip" object in the test.js file
  flowerObject.id = maxId + 1;

//This is now pushing the newly id'ed object into my flowers array with the new Id key/value pair attached to it
  flowers.push(flowerObject);
};



const findExpensiveFlowers = () => {
  const expensiveFlowers = []; // Do not change this code

  for (const flower of flowers) {
    if (flower.price >= 1.0) {
      expensiveFlowers.push(flower);
    }
  }
  /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */

  return expensiveFlowers; // Do not change this code
};

// Do not touch this code
module.exports = {
  findExpensiveFlowers,
  addFlower,
};

// console.log(findExpensiveFlowers());

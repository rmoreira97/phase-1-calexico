// ## Challenge #1
// Fetch all the menu items from `http://localhost:3000/menu`. For each menu item create a `span` element that contains the name of the menu item, and add it to the `#menu-items` div.

// ## Challenge #2
// When the page loads, display the first menu item. You should set the image, name, description, and price. All the correct elements to set are located in the `#dish` `section` element.

// ## Challenge #3
// When the user clicks on the menu items on the left, they should see all the details for that specific menu item.

// ## Challenge #4
// The user should be able to add the menu items to their cart. When the user presses the 'Add to Cart' button, that number should be added to however many are currently in the cart.

// For example, if there are currently 2 burritos in the cart, and the user adds 2 more, the total should be 4.

// we need this VVV to do anything with the DOM


// lets do number 1 
// fetch all the menu items from http://localhost:3000/menu
document.addEventListener("DOMContentLoaded", () => {
  // this is adding an event listener to the DOM that will run when the DOM is loaded

  fetch("http://localhost:3000/menu") // fetch is getting the data from the url
    .then((response) => response.json()) // this is converting the data into json
    .then((menuItems) => {
      // this is taking the json data and putting it into a variable called menuItems
      menuItems.forEach((menuItem) => {
        // this is looping through the menuItems variable and creating a span for each item
        const span = document.createElement("span"); // this is creating the span
        span.innerText = menuItem.name; // this is setting the text of the span to the name of the menu item
      });
    });
  // thats number 1 done!

  // lets do number 2
  // number 2 is display first menu item when the page loads
  // no need to do another fetch request  since we already have the data

  fetch("http://localhost:3000/menu")
    .then((response) => response.json())
    .then((menuItems) => {
      const menuItem = menuItems[0];

      const img = document.createElement("img");
      img.src = menuItem.image;
      document.querySelector("#dish img").replaceWith(img);

      const description = document.createElement("p");
      description.innerText = menuItem.description;
      document.querySelector("#dish p").replaceWith(description);

      const price = document.createElement("h3");
      price.innerText = `$${menuItem.price.toFixed(2)}`;
      document.querySelector("#dish h3").replaceWith(price);
    })
    .catch((error) => {
      console.error("Error fetching menu items:", error);
    });
});



// thats number 2 done!

 // number 3 is when the user clicks on the menu items on the left, they should see all the details for that specific menu item./

// lets do number 3

// we need to add an event listener to each span that will display the details of the menu item when clicked


fetch('http://localhost:3000/menu') // fetch is getting the data from the url
    .then(response => response.json()) // this is converting the data into json
    .then(menuItems => { // this is taking the json data and putting it into a variable called menuItems
        menuItems.forEach(menuItem => { // this is looping through the menuItems variable and creating a span for each item
            const span = document.createElement('span') // this is creating the span
            span.innerText = menuItem.name // this is setting the text of the span to the name of the menu item
            span.addEventListener('click', () => { // this is adding an event listener to the span that will run when the span is clicked
                const img = document.createElement('img') // this is creating the img element
                img.src = menuItem.image // this is setting the src of the img to the image of the menuItem
                document.querySelector('#dish img').replaceWith(img) // this is replacing the existing img with the new one
                
                const description = document.createElement('p');
                description.innerText = menuItem.description;
                console.log(description.innerText); // Log the description text to the console
                document.querySelector('#dish p').replaceWith(description);
                
                const price = document.createElement('h3');
                price.innerText = `$${menuItem.price.toFixed(2)}`;
                console.log(price.innerText); // Log the price text to the console
                document.querySelector('#dish h3').replaceWith(price); // this is replacing the existing h3 with the new one
            })  
            document.querySelector('#menu-items').appendChild(span) // this is appending the span to the menu-items div
        })
    })
// thats number 3 done! 


// lets do number 4 
// number 4 is the user should be able to add the menu items to their cart. When the user presses the 'Add to Cart' button, that number should be added to however many are currently in the cart.

const cartForm = document.querySelector('#cart-form') // this is selecting the cart-form
const cartNumSpan = document.querySelector('#number-in-cart')
const currNum = cartNumSpan.textContent ; 
// console.log(currNum)
// console.log(typeof currNum); // this is selecting the span that displays the number of items in the cart  
 const numToAdd = document.querySelector('#quantity') // this is selecting the input that the user will enter the number of items they want to add to the cart  
 console.log(numToAdd)

 // lets do number 4
// number 4 is the user should be able to add the menu items to their cart. When the user presses the 'Add to Cart' button, that number should be added to however many are currently in the cart.
        cartForm.addEventListener('submit', (event) => { // this is adding an event listener to the cartForm that will run when the form is submitted
            event.preventDefault() // this is preventing the default action of the form
            const cartNumSpan = document.querySelector('#number-in-cart') // this is selecting the span that displays the number of items in the cart
            const currNum = cartNumSpan.textContent // this is setting the variable currNum to the current number of items in the cart
            const numToAdd = event.target[0].value 
            const newTotal = parseInt (currNum) + parseInt(numToAdd) // this is setting the variable newTotal to the current number of items in the cart plus the number of items the user wants to add
            cartNumSpan.textContent = newTotal // this is setting the text of the cartNumSpan to the newTotal
           
        })
// thats number 4 done!

        
     // this is closing the DOMContentLoaded event listener

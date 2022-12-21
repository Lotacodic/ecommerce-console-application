//catalog
const cataLog = [
  ["lenovo thinkpad 13", 600],
  ["apple macbook Air", 900],
  ["apple retina pro", 900],
  ["hp corei3", 400],
  ["dell inspiron", 500],
  ["lenovo flex", 250],
];

//creating a function to replicate console.log
function print(message) {
  console.log(message);
}

//function to display lists of items and prices on cataLog
function catlogList(items) {
  var list = "\n***********************************\n";
  for (i = 0; i < items.length; i++) {
    list += "\n[" + items[i][0] + "," + " costs " + "$" + items[i][1] + "]\n";
  }
  list += "\n***********************************\n";
  print(list);
}

// iCompleted: a function to loop through the prices
/*
const loopCatalogPrice = (loop) => {
  let list = [];
  for (let i = 0; i < loop.length; i++) {
    list += loop[i][1];
  }
  print(list);
};
*/

//Empty cart, user items goes here..
var cart = []; 

//enabling prompt in console using readline module 
//accepts user input and store it a callback function
var r1 = require("readline"); 
var prompts = r1.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Display welcome, prompts Messages in the interface
prompts.question("\nEnter your name: ", (username) => {
  print(`\nHey ${username},\n
  ============ WELCOME TO JOSTORE ============`);
  print("\n======= We sell different laptop brands=====\n\n====== You make your selection, we do the delivery======"
  );
  print(`\n============= VIEW OUR ITEMS!==================== \n`);
  catlogList(cataLog);
  //to enable the user to add one item from the lists
  prompts.question(
    "Enter the device you want to be added to your shopping cart \n(enter correctly, words in the lists):  ",
    (itemSelected) => {
      if (cataLog[0].includes(itemSelected)) {
        print(`${itemSelected} has been added to your shopping cart\n`);
        cart.push(itemSelected);
        print(`Your shopping cart: \n${cart}`);
      } else if (cataLog[1].includes(itemSelected)) {
        print(`${itemSelected} has been added to your shopping cart\n`);
        cart.push(itemSelected);
        print(`Your shopping cart: \n${cart}`);
      } else if (cataLog[2].includes(itemSelected)) {
        print(`${itemSelected} has been added to your shopping cart\n`);
        cart.push(itemSelected);
        print(`Your shopping cart: \n${cart}`);
      } else if (cataLog[3].includes(itemSelected)) {
        print(`${itemSelected} has been added to your shopping cart\n`);
        cart.push(itemSelected);
        print(`Your shopping cart: \n${cart}`);
      } else if (cataLog[4].includes(itemSelected)) {
        print(`${itemSelected} has been added to your shopping cart\n`);
        cart.push(itemSelected);
        print(`Your shopping cart: \n${cart}`);
      } else if (cataLog[5].includes(itemSelected)) {
        print(`${itemSelected} has been added to your shopping cart\n`);
        cart.push(itemSelected);
        print(`Your shopping cart: \n${cart}`);
      } else {
        print(`${itemSelected} is not in stock now`);
      }
      //to enable the user to add more items from the lists
      prompts.question(
        "\nAdd more laptop to your shopping cart? \nor Hit 'Enter' to go to checkout:  ",
        (addMoreItems) => {
          if (cataLog[0].includes(addMoreItems)) {
            print(`\n${addMoreItems} has been added to your shopping cart\n`);
            cart.push(addMoreItems);
            print(`Your shopping cart: \n ${cart}`);
          } else if (cataLog[1].includes(addMoreItems)) {
            print(`\n${addMoreItems} has been added to your shopping cart\n`);
            cart.push(addMoreItems);
            print(`Your shopping cart: \n ${cart}`);
          } else if (cataLog[2].includes(addMoreItems)) {
            print(`\n${addMoreItems} has been added to your shopping cart\n`);
            cart.push(addMoreItems);
            print(`Your shopping cart: \n ${cart}`);
          } else if (cataLog[3].includes(addMoreItems)) {
            print(`\n${addMoreItems} has been added to your shopping cart\n`);
            cart.push(addMoreItems);
            print(`Your shopping cart: \n ${cart}`);
          } else if (cataLog[4].includes(addMoreItems)) {
            print(`\n${addMoreItems} has been added to your shopping cart\n`);
            cart.push(addMoreItems);
            print(`Your shopping cart: \n ${cart}`);
          } else if (cataLog[5].includes(addMoreItems)) {
            print(`\n${addMoreItems} has been added to your shopping cart\n`);
            cart.push(addMoreItems);
            print(`Your shopping cart: \n ${cart}`);
          } else {
            print(`${addMoreItems} is not in stock now`);
          }
          prompts.question("Enter your Email Address: ", (emailAddress) => {
            prompts.question("Enter your Home Address: ", (homeAddress) => {
              prompts.question(
                "Enter your Phone Number \n(make sure its 11): ",
                (phoneNumber) => {
                  let checkoutMessage = "";
                  if (phoneNumber.length >= 10) {
                    checkoutMessage =
                      "\n\n Thank You! " +
                      username +
                      "\n\n Your details have been stored and expect delivery in 3 days" +
                      "\n\n-----------------------------------------------" +
                      "\n\n-----------------------------------------------" +
                      "\n\n Username              : " +
                      username +
                      "\n\n Email                 : " +
                      emailAddress +
                      "\n\n Contact Address       : " +
                      homeAddress +
                      "\n\n Phone Number          : " +
                      phoneNumber +
                      `\n\n Shopping Cart - ${cart}   : ` +
                      "\n\n Total                 : " +
                      "\n\n-- Thank you for shopping at JOSTORE --" +
                      "\n\n-----------------------------------------------";
                  } else {
                    checkoutMessage =
                      `${phoneNumber} its not up to 11 digits,\n please
                    restart and input 11  digits of your phone number `;
                  }
                  print(checkoutMessage);
                }
              );
            });
          });
        }
      );
    }
  );
});
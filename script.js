//catalog
const cataLog = [
    ["Lenovo ThinkPad 13", 600],
    ["Apple Macbook Air", 900],
    ["Apple Pro Retina", 900],
    ["HP 13 corei3", 400],
    ["HP 225 G4 AMD", 500],
    ["Lenovo Flex10", 250]
];

//creating a function to replicate console.log 
function print(message) {
    console.log(message);
};

//function to display items on cataLog
function catlogList(items) {
    var list = "\n*************************\n";
    for(i = 0; i < items.length; i++) {
        list +="\n["+ items[i][0] +" costs "+ "$" + items[0][1] +"]\n";
    }
        list += "\n*************************\n";
        print(list);
};

var cart = []; //Empty cart, user items goes here..

//enabling prompt in console using readline module
var r1 = require("readline"); //imports readline to js file
//for receiving user input
var prompts = r1.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Display welcome, prompt Messages 
prompts.question("\nEnter your name: ", (username)=>{
    print(`\nHey ${username}, welcome to Jostore`);
    print(`\nWe sell different laptop brands\n\nyou make your selection, we do the delivery`);
    print(`\n Below are the lists and cost of laptops in our stores: \n`);
    catlogList(cataLog);
    prompts.question("Select the devices you want to be added to your shopping cart: ", (itemSelected)=> {
       if(Array.prototype.values(cataLog.indexOf(itemSelected) > -1)) {
        print(`${itemSelected} has been added to your cart\n`);
        cart.push(itemSelected);
        print(`Your shopping cart: \n${cart}`);
       }
       else{
        print(`${itemSelected} not in our catalog!`)
       }
       print(`\nDo you wish to add more to your cart?`)
})
})
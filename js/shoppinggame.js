// Define the three constants here
const name = 'unknown';
const score = 0;
const items = 0

let player = {
  name: "unknown",
  score: 0,
  items: 0
}

/*
The getCurrentScore() method should simply return the score property. The addPoints() method should accept points as a parameter, and add it to the current score. The deductPoints() method should accept points as a parameter, and subtract it from the current score . Use the method declaration shorthand (that is, without using the function keyword) to declare these three methods.
*/
let player = {name , score, items,

    getCurrentScore()  {return this.score;},
    addPoints(points)  {this.score += points;},
    deductPoints(points)  { this.score -= points}

};

// Define the player object here


// Define the Product class - write the Constructor function for Product class here

function Product (name, price, expiryDate, id) {
        this.name = name;
        this.price = price;
        this.expiryDate = expiryDate;
        this.id = id;
}

// Complete the dateDiff function
const dateDiff = (date1, date2) => {};


// Here, use Object.defineProperty to create property - daysToExpire


// Add method getDetails to Product here


// Define the MagicProduct class here


// Create the link between Product & MagicProduct classes here 


// Define Rating class here



// Complete this function
function loadMasterData() {
    let productsList = new Array();
    let prodId = 1;

    const today = new Date();
    const oneYearLater = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay());
    const daysLater = new Date(today.getFullYear(), today.getMonth(), today.getDay() + 3);

    //##############Load Products###############################
    let productData = new Map();
    productData.set("popcorn", { pr: 100.50, dt: oneYearLater });
    productData.set("oatmeal", { pr: 100.25, dt: oneYearLater });
    productData.set("macaroni", { pr: 100.10, dt: oneYearLater });
    productData.set("turkey", { pr: 800, dt: daysLater });
    productData.set("crab", { pr: 400, dt: daysLater });
    productData.set("butter", { pr: 25.50, dt: oneYearLater });
    productData.set("flour", { pr: 30, dt: oneYearLater });
    productData.set("pasta", { pr: 40.10, dt: oneYearLater });
    productData.set("chocolate", { pr: 25, dt: oneYearLater });
    productData.set("cola", { pr: 10, dt: oneYearLater });
    productData.set("beaf", { pr: 100.50, dt: daysLater });
    productData.set("fish", { pr: 150, dt: daysLater });
    productData.set("carrot", { pr: 40.10, dt: daysLater });
    productData.set("greens", { pr: 50, dt: daysLater });
    productData.set("sugar", { pr: 100, dt: oneYearLater });


    // Call Object.keys() to load the property names of the Product object in to an array named prodKeys here

    // Complete the loadProducts function
    const loadProducts = (value, key, map) => {};

    
    productData.forEach(loadProducts);


    //##############Load MagicProducts###############################
    let magicProductData = new Map();
    magicProductData.set("Christmas cake", { pr: 1000, dt: oneYearLater, pt: 10, isB: true });
    magicProductData.set("honey", { pr: 200, dt: oneYearLater, pt: 20, isB: false });
    magicProductData.set("pepper", { pr: 500, dt: oneYearLater, pt: 10, isB: false });
    magicProductData.set("champagne", { pr: 2000, dt: oneYearLater, pt: 40, isB: true });
    magicProductData.set("cocktails", { pr: 2000, dt: oneYearLater, pt: 40, isB: true });


    // Complete the loadMagicProducts function
    const loadMagicProducts = (value, key, map) => {};


    return productsList;
}

const getProduct = (prodList) => {};

const findProductById = (id) => {};

const findPointsToBill = (roundedTotal) => {};

const findPointsForExpDate = (prod) => {};

const  claculateBill = (prod, tBill) => {};

const claculatePoints = (prod, tBill) => {};

// Complete this function
function init(data) {
    console.log("Welcome to the Shopping Master game! You can shop for groceries and become a Shopping Master!");
    console.log("We offer you grocery items that you can buy or reject. You can buy up to 10 items.");
    console.log("As you go along your shopping journey you will collect points.");
    console.log("If you earn 500 points you become a Shopping Master!");
	console.log("You can start the game or quit using the following options.");
    console.log("1 - Shop".green);
    console.log("2 - Quit".green);
    console.log("=============================================================================================\n");

    rl.question("What's your name? ", function (name) {
        
    });
}

function start(data) {
    rl.question("What would you like to do? <Enter option number>: ", function (option) {
        if (option == "" || isNaN(option)) {
            console.log("Invalid option! Enter 1 or 2".red);
            start(data);
        } else {
            doAction(option, data);
        }
    });
}

// Complete this function
const shop = (prodList, lastProd) => {
    let totalBill = 0;
    let product = null;

    rl.question("Do you want to buy this item <Y/N>? ", function (option) {
       
    });
};

// Complete this function
const rateAndExit = () => {
    rl.question("How would you rate this game on a scale of 1-10 (1 being the lowest)?:", function (r) {
       
    });
};

// Complete this function
const exitLost = () => {
    console.log(`Your chances are over! You are short of ${500} to become a Shopping Master. Good Luck for next time!`.yellow);
};

// Complete this function
const exitWon = () => {
    console.log(`Congratulations!!! You became ${0}!`.blue);
};

function main() {
    process.exit(0); // Replace this with correct function calls
}



///////////////////////////////////////////////////////////////
const readline = require("readline");
require('colors');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const quit = () => {
    rl.on("close", function () {
        console.log("\nGAME OVER !!!".bold);
    });
    process.exit(0);
};

function doAction(o, d) {
    if (o == 1) {
        shop(d);
    } else if (o == 2) {
        quit();
    }
}

//main(); // Uncomment this line of code once all functionality is complete

exports.dateDiff = dateDiff;
exports.loadMasterData = loadMasterData;
exports.getProduct = getProduct;
exports.findProductById = findProductById;
exports.findPointsToBill = findPointsToBill;
exports.findPointsForExpDate = findPointsForExpDate;
exports.claculateBill = claculateBill;
exports.claculatePoints = claculatePoints;
exports.init = init;
exports.shop = shop;
exports.rateAndExit = rateAndExit;
exports.exitLost = exitLost;
exports.exitWon = exitWon;
exports.main = main;

exports.name = name;
exports.items = items;
exports.score = score;
exports.player = player;

exports.Product = Product;


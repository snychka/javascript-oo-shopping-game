//Define the player object here

let player = {
  name: "unknown",
  score: 0,
  items: 0
}


//Define the Product class - write the Constructor function for Product class here


//Here, use Object.defineProperty to create property - daysToExpire



//Complete the dateDiff function
const dateDiff = (date1, date2) => {
};

//Add method getDetails to Product using its prototype


//Define the MagicProduct class here


//Create the link between Product & MagicProduct classes here 


//Add method getDetails to Product class


//Define Rating class here



//to be completed
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



    const loadProducts = (value, key, map) => {};


    //##############Load MagicProducts###############################
    let magicProductData = new Map();
    magicProductData.set("Christmas cake", { pr: 1000, dt: oneYearLater, pt: 10, isB: true });
    magicProductData.set("honey", { pr: 200, dt: oneYearLater, pt: 20, isB: false });
    magicProductData.set("pepper", { pr: 500, dt: oneYearLater, pt: 10, isB: false });
    magicProductData.set("champagne", { pr: 2000, dt: oneYearLater, pt: 40, isB: true });
    magicProductData.set("cocktails", { pr: 2000, dt: oneYearLater, pt: 40, isB: true });


    const loadMagicProducts = (value, key, map) => {};


    return productsList;
}

const getProduct = (prodList) => {};

const findProductById = (id) => {};

const findPointsToBill = (roundedTotal) => {};

const findPointsForExpDate = (prod) => {};

const  claculateBill = (prod, tBill) => {};

const claculatePoints = (prod, tBill) => {};

//to be completed
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

//to be completed
const shop = (prodList, lastProd) => {
    let totalBill = 0;
    let product = null;

    rl.question("Do you want to buy this item <Y/N>? ", function (option) {
       
    });
};

//to be completed
const rateAndExit = () => {
    rl.question("How would you rate this game on a scale of 1-10 (1 being the lowest)?:", function (r) {
       
    });
};

//to be completed
const exitLost = () => {
    console.log(`Your chances are over! You are short of ${500} to become a Shopping Master. Good Luck for next time!`.yellow);
};

//to be completed
const exitWon = () => {
    console.log(`Congratulations!!! You became ${0}!`.blue);
};

function main() {
    process.exit(0); // to be replaced by correct function calls
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

//main(); // Uncomment this line of code

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




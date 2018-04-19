var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection info for sql database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon_db"
})

// connect to the mysql server and sql database
connection.connect(function (err) {
	console.log("Connected as id: " + connection.threadId);
	if (err) throw err;

	// run the start function after the connection is made to prompt the user
	start();
})

// create a function for the user to place an order
function start() {

	// show all info about all products in database
	connection.query("SELECT * FROM products", function (err, res) {
		if (err) throw err;

		console.log(res);

		// prompt user to input the id of the product s/he wishes to order
		inquirer.prompt(
			[
				{
					name: "id",
					type: "input",
					message: "What is the ID of the product you wish to order?",
				}

				// prompt user to input the amount of the product s/he wishes to order
				, {
					name: "amount",
					type: "input",
					message: "How many of this item do you wish to order?",

					// use a validation method to make sure the customer enters a number
					validate: function (value) {
						if (isNaN(value) === false) {
							return true;
						}
						return false;
					}
				}
			]
		)
			.then(function (inquirerResponse) {
				checkStock(inquirerResponse.id, inquirerResponse.amount);
			});
		})
	}

		// create a function to see if we have enough of the stock to meet the request
		function checkStock() {
			console.log("working");


// ******************* stops working here


			// connection.query("SELECT stock_quantity FROM products WHERE id = " + itemID, function (err, results) {
			connection.query("SELECT stock_quantity FROM products WHERE id = " + inquirerResponse.id, function (err, results) {
				console.log(results);
				if (err) throw err;

				// create a variable to store the ID of the item selected by the user
				// create a variable to store the amount requested by the user 
				// create a variable to store the amount of the product currently in stock

				
				var stockAmount;
				// var stockAmount = results.something


				// If userAmount is less that stockAmount, subtract the former from the latter and create a new variable to store the result

				var newAmount;
				var newAmount = stockAmount - userAmount;


				// do the math to see if the user amount is greater than the amount in stock
				if (userAmount > stockAmount) {
					console.log("Insufficient quantity!")
				}

				else {
					// update the database with the new amount of stock on hand
					connection.query("UPDATE products SET stock_quantity = " + newAmount + "WHERE id = " + itemID);

					// query the database to find the price of the item selected by the user
					connection.query("SELECT price FROM products WHERE id = " + itemID,
						function (err, results) {
							if (err) throw err;
							console.log(results);

							// create a variable to store the unit price
							var itemPrice;
							// ******************* how do I define this variable?

							// create a variable to store the total cost (the unit price multiplied by the number of units requested)
							var totalCost;
							var totalCost = itemPrice * userAmount;
							console.log("The total cost of your order is " + totalCost + ".");
							// run the start function to re-prompt the customer to place another order
							start();
						}
					);
				}
				// Show total cost of order.
			});
		}

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

connection.connect(function(err){
	console.log("Connected as id: "+connection.threadId);
	if (err) throw err;

// run the start function after the connection is made to prompt the user

	start();
})

function placeOrder() {

	// show all info about all products in database

	connection.query("SELECT * FROM 

	// name of database? or name of table in database?

	", function(err, results) {
		if (err) throw err;
		
// prompt user to input the id of the product s/he wishes to order
	
inquirer
	.prompt(
		[
		{
			name: "id",
			type: "list",
			message: "What is the ID of the product you wish to order?",
			// How to make sure the customer enters one of the valid ten ID numbers? How do I know what those numbers will be so I can enter them into the "choices" field?
			choices: ["choice1", "choice2", "choice3"]
			}

// prompt user to input the amount of the product s/he wishes to order

		{
			name: "amount",
			type: "input",
			message: "How many of this item do you wish to order?",
	// make sure the customer enters a number
			validate: function(value) {
				if (isNaN(value) === false) {
					return true;
				}
				return false;
				}
			}
		]
		)
		
		// Check if your store has enough of the product to meet the customer's request. If not, console.log "insufficient quality" and stop order from going through.


		// If there is enough of the product, update SQL database to reflect new quantity. 

		// Confirm customer order and show total cost of order.

		.then(function(confirm) {
          if (err) throw err;
					console.log("Your order was placed successfully.");
					
					// Show total cost of order!
					
					// re-prompt the customer to place another order

          start();
        }
      );
    });
}

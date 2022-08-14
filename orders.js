// This file will contain the queries to the customer table
const database = require("./database");
const express = require("express");

// Allows us to define a mapping from the URI to a function
router = express.Router();

// can be used to define a GET API.   URI -> CB function.
router.get("/orders/all", (request, response) => {
  database.connection.all(sqlstr = "select * from shop_order", (errors, results) => { //database.connection.all ==> consider all the tables. else can specify the table name directly
    if (errors) {
      response.status(500).send("Some error occurred" + sqlstr);
    } else {
      response.status(200).send(results);
    }
  });
});
//Note: use query instead of all for MySQL - database.connection.query("select * from customer"

// defines an API which takes shopping id in the request and return the record in response
router.get("/order/id", (request, response) => {
  database.connection.all(
    sqlstr = `select * from shop_order where id = '${request.query.sid}'`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred" + sqlstr);
      } else {
        response.status(200).send(results);
      }
    }
  );
});


// defines an API which takes customer id in the request and return the corresponding orders placed by the customer
router.get("/order/customer", (request, response) => {
  database.connection.all(
    sqlstr = `select s.id, i.name, s.quantity, s.shipping_date from customer c left join shop_order s on c.id = s.customerID left join item i on s.itemID = i.id where c.id = '${request.query.cid}'`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred" + sqlstr);
      } else {
        response.status(200).send(results);
      }
    }
  );
});

// // a POST API to store the record received in the request
// router.post("/customer/add", (request, response) => {
//   database.connection.all(
//     `insert into customer (customer_name, customer_email) values ('${request.body.name}','${request.body.email}')`,
//     (errors, results) => {
//       if (errors) {
//         response.status(500).send("Some error occurred");
//       } else {
//         response.status(200).send("Record saved successfully!");
//       }
//     }
//   );
// });

// // POST + PUT = Body, GET + DELETE = Query
// router.delete("/customer/delete", (request, response) => {
//   database.connection.all(
//     `delete from customer where customer_id  = ${request.query.cid}`,
//     (errors, results) => {
//       if (errors) {
//         response.status(500).send("Some error occurred");
//       } else {
//         response.status(200).send("Record deleted successfully!");
//       }
//     }
//   );
// });

// //PUT API to update given customer id's email address
// router.put("/customer/update", (request, response) =>{
//   database.connection.all(sqlstmt = `UPDATE customer SET customer_email = '${request.body.email}' where customer_id = ${request.body.cid}`,
//     (errors, results) => {
//       if (errors) {
//         response.status(500).send("Some error occurred" + sqlstmt );
//       } else {
//         response.status(200).send("Record updated successfully!" + sqlstmt);
//       }
//     }
//   );
// });

// a PUT API to update email for given customer id -Prof
// router.put("/customer/change", (request, response) => {
//   database.connection.all(
//     `UPDATE customer SET customer_email = "${request.body.cemail}""
//     WHERE customer_id  = ${request.body.cid}`,
//     (errors, results) => {
//       if (errors) {
//         response.status(500).send("Some error occurred");
//       } else {
//         response.status(200).send("Record updated successfully!");
//       }
//     }
//   );
// });


module.exports = {
  router,
};

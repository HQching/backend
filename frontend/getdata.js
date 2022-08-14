function getFromServer() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/customer/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        id: ${item.customer_id} <br>
        name: ${item.customer_name} <br>
        email: ${item.customer_email}
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}

function postData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    name: form.name.value,
    email: form.email.value,
  });

  console.log(raw);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => (respanel.innerHTML = result))
    .catch((error) => console.log("error", error));
}

function deleteData() {
  var requestOptions = {
    method: "DELETE",
  };
  url = "http://localhost:3000/customer/delete?cid=" + form.cid.value;
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}

// function getCustFromServer() {
//   var requestOptions = {
//     method: "GET",
//     // redirect: "follow",
//   };

//   fetch("http://localhost:3000/customer/id?cid=" + form.cid2.value, requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       var text = "<ul>";
//       data.forEach(function (item) {
//         text += `<li>
//         id: ${item.customer_id} <br>
//         name: ${item.customer_name} <br>
//         email: ${item.customer_email}
//         </li>`;
//       });
//       text += "</ul>";
//       document.getElementById("mypanel").innerHTML = text;
//     })
//     .catch((error) => console.log("error", error));
// }

function getCustFromServer() {
  var requestOptions = {
    method: "GET",
  };
  url = "http://localhost:3000/customer/id?cid=" + form.cid2.value;
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}

function updateFromServer() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    cid: form.cid3.value,
    email: form.cemail.value,
  });

  console.log(raw);
  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/update", requestOptions)
    .then((response) => response.text())
    .then((result) => (respanel.innerHTML = result))
    .catch((error) => console.log("error", error));
    
}


// update prof code
// function updateData() {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   respanel = document.getElementById("mypanel");

//   // Populate this data from e.g. form.
//   var raw = JSON.stringify({
//     cid: form.cid2.value,
//     cemail: form.cemail.value,
//   });

//   console.log(raw);
//   var requestOptions = {
//     method: "PUT",
//     headers: myHeaders,
//     body: raw,
//   };

//   fetch("http://localhost:3000/customer/change", requestOptions)
//     .then((response) => response.text())
//     .then((result) => (respanel.innerHTML = result))
//     .catch((error) => console.log("error", error));
// }

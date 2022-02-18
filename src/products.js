var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];

var cartArr = [];

$(document).ready(function () {
  $("#emptyMsg").text("your cart is Empty");
  $("#emptyMsg").css("color", "green");
  $("#cartFootball").on("click", function () {
    $("#emptyMsg").hide();
    var temp = 0;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 102) {
        obj1 = {
          id: 102,
          name: "Football",
          image: "football.png",
          price: 120,
          quantity: 1,
        };

        var temp = 0;
        for (let j = 0; j < cartArr.length; j++) {
          if (cartArr[j].id == 102) {
            cartArr[j].quantity += 1;
            temp = 1;
            break;
          }
        }
        if (temp != 1) {
          cartArr.push(obj1);
        }
      }
      display(cartArr);
    }
  });

  $("#cartBasketball").on("click", function () {
    $("#emptyMsg").hide();
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 101) {
        var obj1 = {
          id: 101,
          name: "Basket Ball",
          image: "basketball.png",
          price: 150,
          quantity: 1,
        };
        var temp = 0;
        for (let j = 0; j < cartArr.length; j++) {
          if (cartArr[j].id == 101) {
            cartArr[j].quantity += 1;
            temp = 1;
            break;
          }
        }
        if (temp != 1) {
          cartArr.push(obj1);
        }
      }
      display(cartArr);
    }
  });
  $("#cartSoccer").on("click", function () {
    $("#emptyMsg").hide();
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 103) {
        var obj1 = {
          id: 103,
          name: "Soccer",
          image: "soccer.png",
          price: 110,
          quantity: 1,
        };
        var temp = 0;
        for (let j = 0; j < cartArr.length; j++) {
          if (cartArr[j].id == 103) {
            cartArr[j].quantity += 1;
            temp = 1;
            break;
          }
        }
        if (temp != 1) {
          cartArr.push(obj1);
        }
      }
      display(cartArr);
    }
  });

  $("#cartTabletennis").on("click", function () {
    $("#emptyMsg").hide();
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 104) {
        var obj1 = {
          id: 104,
          name: "Table Tennis",
          image: "table-tennis.png",
          price: 130,
          quantity: 1,
        };
        var temp = 0;
        for (let j = 0; j < cartArr.length; j++) {
          if (cartArr[j].id == 104) {
            cartArr[j].quantity += 1;
            temp = 1;
            break;
          }
        }
        if (temp != 1) {
          cartArr.push(obj1);
        }
      }
      display(cartArr);
    }
  });

  $("#cartTennis").on("click", function () {
    $("#emptyMsg").hide();
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 105) {
        var obj1 = {
          id: 105,
          name: "Tennis",
          image: "tennis.png",
          price: 100,
          quantity: 1,
        };
        var temp = 0;
        for (let j = 0; j < cartArr.length; j++) {
          if (cartArr[j].id == 105) {
            cartArr[j].quantity += 1;
            temp = 1;
            break;
          }
        }
        if (temp != 1) {
          cartArr.push(obj1);
        }
      }
      display(cartArr);
    }
  });
  $("#clearCart").on("click", function () {
    $("table").remove();
    $("#emptyMsg").show();
    $("#emptyMsg").text("your cart is Empty");
    $("#emptyMsg").css("color", "green");
  });
});

function display(cartArr) {
  var html =
    "<table> <tr> <th> Id</th> </t> <th>   Name</th> </t> <th> image </th< </t> <th> Price</th> <th> Quantity</th> ";
  for (let i = 0; i < cartArr.length; i++) {
    html +=
      "<tr><td>" +
      cartArr[i].id +
      "</td><td>" +
      cartArr[i].name +
      "</td><td>" +
      cartArr[i].image +
      "</td><td>" +
      "$" +
      cartArr[i].price +
      "</td><td>" +
      '<button  id="decQuantity" onclick="decQuantity(' +
      parseInt(cartArr[i].id) +
      ') " >-</button>' +
      cartArr[i].quantity +
      '<button id="incQuantity" onclick ="incQuantity(' +
      parseInt(cartArr[i].id) +
      ') ">+</button>' +
      "</td> <td>" +
      '<button id=" addManually" onclick="addManually(' +
      parseInt(cartArr[i].id) +
      ') " >Add</button>  <input type="text" name="add_Quantity" id="quantityIn"  >' +
      "</td> <td>" +
      '<button id="remove" onclick=" remove(' +
      parseInt(cartArr[i].id) +
      ')" ><img src=" images/delete.png"></button>' +
      "</td></tr>";
  }
  html += "</table>";
  document.getElementById("product_list").innerHTML = html;
}

function incQuantity(inc) {
  for (let i = 0; i < cartArr.length; i++) {
    if (cartArr[i].id == inc) {
      cartArr[i].quantity += 1;
    }
    display(cartArr);
  }
}

function decQuantity(inc) {
  for (let i = 0; i < cartArr.length; i++) {
    if (cartArr[i].id == inc) {
      cartArr[i].quantity -= 1;

      if (cartArr[i].quantity == 0) {
        cartArr.splice(i, 1);
      }
    }
    display(cartArr);
  }
}

function addManually(add) {
  var quant = document.getElementById("quantityIn").value;
  for (let i = 0; i < cartArr.length; i++) {
    if (cartArr[i].id == add) {
      cartArr[i].quantity = quant;
    }
    display(cartArr);
  }
}

function remove(r) {
  for (let i = 0; i < cartArr.length; i++) {
    if (cartArr[i].id == r) {
      cartArr.splice(i, 1);
    }
    display(cartArr);
  }
}
